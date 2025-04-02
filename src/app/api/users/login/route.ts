import { NextRequest, NextResponse } from "next/server";
import passport from "@/services/passport";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function POST(req: NextRequest) {
  const body = await req.json();

  return new Promise((resolve) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      // console.log("err", err, user, info);
      if (err || !user) {
        return resolve(
          NextResponse.json(
            { error: info?.message || "Error de autenticación" },
            { status: 401 }
          )
        );
      }
      // console.log("JWT_SECRET:", process.env.JWT_SECRET);
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );

      const response = NextResponse.json({ token, user });
      response.cookies.set("tokenBarber", token, {
        httpOnly: true,
        maxAge: 3600,
      });
      resolve(response);
    })({ body });
  });
}

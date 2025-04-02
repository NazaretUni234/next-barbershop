import passport from "@/services/passport";
import { NextRequest, NextResponse } from "next/server";

function adaptNextRequestToExpress(req: NextRequest) {
  const adaptedRequest: any = {
    headers: {
      ...Object.fromEntries(req.headers.entries()),
    },
    method: req.method,
    url: req.url,
    body: req.body,
  };

  return adaptedRequest;
}

export async function authenticateJWT(req: NextRequest) {
  const adaptedReq = adaptNextRequestToExpress(req);
  return new Promise((resolve, reject) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      // console.log("USERAUTH", user);

      // console.log("err", err, user, info);
      if (err) {
        return reject(new Error("Error en la autenticación"));
      }
      if (!user) {
        return resolve(
          NextResponse.json({ message: "No autorizado" }, { status: 401 })
        );
      }
      resolve(user); // Devuelve el usuario autenticado
    })(adaptedReq); // `req` necesita ser adaptado para Passport
  });
}

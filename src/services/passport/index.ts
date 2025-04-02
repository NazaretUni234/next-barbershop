import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
// import bcrypt from "bcryptjs";
import { getUserByEmail, getUserById } from "@/models/users";
import "dotenv/config";

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      console.log("email", email, password);
      try {
        const user = await getUserByEmail(email);
        console.log("user", user);
        if (!user) {
          return done(null, false, { message: "Usuario no encontrado" });
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password === user.password; //ecnriptar contraseña despues
        console.log("isMatch", isMatch);
        if (!isMatch) {
          return done(null, false, { message: "Contraseña incorrecta" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    // console.log("JWT Payload recibido:", jwtPayload);
    try {
      const user = await getUserById(jwtPayload.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      console.error("Error en la estrategia JWT:", error);
      return done(error, false);
    }
  })
);

export default passport;

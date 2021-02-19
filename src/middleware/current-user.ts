import { Context, Next } from "koa";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

export const currentUser = (ctx: Context, next: Next) => {
  if (!ctx.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      ctx.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    ctx.currentUser = payload;
  } catch (err) {}

  next();
};

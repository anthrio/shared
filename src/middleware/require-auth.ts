import { Next, Context } from "koa";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuth = (ctx: Context, next: Next) => {
  if (!ctx.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};

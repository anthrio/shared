import { Context, Next } from "koa";
import { CustomError } from "../errors/custom-error";

export const handleErrors = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof CustomError) {
      ctx.status = err.statusCode;
      ctx.body = { errors: err.serializeErrors() };
      return;
    }

    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      errors: [
        {
          message: err.message,
        },
      ],
    };
  }
};

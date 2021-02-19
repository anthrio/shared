import { Context, Next } from "koa";
import joi, { ValidationError } from "joi";
import { RequestValidationError } from "../errors/request-validation-error";

export default function validate(schema: joi.Schema) {
  return async (ctx: Context, next: Next) => {
    if (ctx.request.body) {
      try {
        await schema.validateAsync(ctx.request.body, { abortEarly: false });
      } catch (err) {
        throw new RequestValidationError(err as ValidationError);
      }
    }

    return next();
  };
}

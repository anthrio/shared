import { Context, Next } from "koa";
import joi from "joi";
export default function validate(schema: joi.Schema): (ctx: Context, next: Next) => Promise<any>;

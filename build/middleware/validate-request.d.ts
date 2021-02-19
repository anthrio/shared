import { Context, Next } from "koa";
import joi from "joi";
export declare const validate: (schema: joi.Schema) => (ctx: Context, next: Next) => Promise<any>;

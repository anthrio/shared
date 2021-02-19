import { Context, Next } from "koa";
export declare const currentUser: (ctx: Context, next: Next) => Promise<any> | undefined;

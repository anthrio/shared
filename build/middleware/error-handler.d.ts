import { Context, Next } from 'koa';
declare const handleErrors: (ctx: Context, next: Next) => Promise<void>;
export default handleErrors;

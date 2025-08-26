import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { AUTH_PORT } from "./env";
import { auth } from "./lib/auth";

const app = new Hono();

app.use(logger());
app.use(
	"*",
	cors({
		origin: ["http://localhost:3000"],
		allowHeaders: ["*"],
		allowMethods: ["*"],
		credentials: true,
	}),
);
app.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));

app.post("/test", (ctx, next) => {
	return ctx.json({ test: true }, 200);
});

export default {
	port: AUTH_PORT,
	fetch: app.fetch,
};

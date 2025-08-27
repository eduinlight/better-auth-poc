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
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));

export default {
	port: AUTH_PORT,
	fetch: app.fetch,
};

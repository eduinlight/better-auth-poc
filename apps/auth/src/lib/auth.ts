import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { BETTER_AUTH_DATABASE } from "../env";

export const auth = betterAuth({
	database: new Pool({
		connectionString: BETTER_AUTH_DATABASE,
	}),
	basePath: "/auth",
	emailAndPassword: {
		enabled: true,
	},
});

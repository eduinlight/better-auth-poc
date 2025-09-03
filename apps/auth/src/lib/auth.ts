import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { AUTH_DATABASE, AUTH_SECRET, AUTH_URL, CLIENT_BASE_URL } from "../env";

export const auth = betterAuth({
	baseURL: AUTH_URL,
	basePath: "/auth",
	trustedOrigins: [CLIENT_BASE_URL],
	secret: AUTH_SECRET,
	database: new Pool({
		connectionString: AUTH_DATABASE,
	}),
	emailAndPassword: {
		enabled: true,
		// requireEmailVerification: true,
	},
	// emailVerification: {
	// 	sendOnSignIn: true,
	// 	sendVerificationEmail: async ({ user, url, token }, request) => {
	// 		await sendEmail({
	// 			to: user.email,
	// 			subject: "Verify your email address",
	// 			text: `Click the link to verify your email: ${url}`,
	// 		});
	// 	},
	// },
});

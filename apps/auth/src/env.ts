import z from "zod";

const envSchema = z.object({
	AUTH_PORT: z.string().transform(Number),
	AUTH_SECRET: z.string(),
	AUTH_URL: z.url(),
	AUTH_DATABASE: z.url(),
	CLIENT_BASE_URL: z.url(),
});

export const {
	AUTH_PORT,
	AUTH_DATABASE,
	AUTH_URL,
	AUTH_SECRET,
	CLIENT_BASE_URL,
} = envSchema.parse(process.env);

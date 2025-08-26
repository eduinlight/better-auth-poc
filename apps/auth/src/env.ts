import z from "zod";

const envSchema = z.object({
	AUTH_PORT: z.string().transform(Number),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.url(),
	BETTER_AUTH_DATABASE: z.url(),
});

export const {
	AUTH_PORT,
	BETTER_AUTH_DATABASE,
	BETTER_AUTH_URL,
	BETTER_AUTH_SECRET,
} = envSchema.parse(process.env);

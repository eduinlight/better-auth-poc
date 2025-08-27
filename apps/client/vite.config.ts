import { createViteConfig } from "@config/vite";
import z from "zod";

const envSchema = z.object({
	CLIENT_PORT: z.string().transform(Number),
});

const { CLIENT_PORT } = envSchema.parse(process.env);

export default createViteConfig(CLIENT_PORT);

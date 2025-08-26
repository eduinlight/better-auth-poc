import z from "zod";

const envSchema = z.object({});

export const {} = envSchema.parse(import.meta.env);

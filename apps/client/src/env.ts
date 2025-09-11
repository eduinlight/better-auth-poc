import z from "zod";

const envSchema = z.object({});

envSchema.parse(import.meta.env);

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import z from "zod";

const envSchema = z.object({
	CLIENT_PORT: z.string().transform(Number),
});

const { CLIENT_PORT } = envSchema.parse(process.env);

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: CLIENT_PORT,
		host: true, // Enable access from outside the container
		watch: {
			usePolling: true, // Enable polling for file changes in Docker
		},
		hmr: {
			port: CLIENT_PORT, // Use the same port for HMR
		},
	},
	plugins: [react(), tailwindcss()],
});

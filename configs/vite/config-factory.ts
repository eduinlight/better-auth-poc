import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export function createViteConfig(port: number) {
	return defineConfig({
		server: {
			port: port,
			host: true,
			watch: {
				usePolling: true,
			},
			hmr: {
				port: port,
			},
		},
		plugins: [react(), tailwindcss(), tsconfigPaths()],
	});
}

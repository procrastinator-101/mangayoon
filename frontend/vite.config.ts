import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgx from "@svgx/vite-plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgx(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

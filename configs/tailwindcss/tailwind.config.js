import { join } from "node:path";

/** @type {import('tailwindcss').Config} */
export default {
	content: [join(__dirname, "./src/**/*.{ts,tsx}")],
};

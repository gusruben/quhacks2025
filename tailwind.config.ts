import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				// Add more custom font families as needed
			},
			backgroundImage: {
				'pixel-pattern': "url('/bg-img.png')",
			}
		},
	},

	plugins: []
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			'nhs-blue': 'hsl(var(--nhs-blue))',
			'nhs-blue-hover': 'hsl(var(--nhs-blue-hover))',
			medical: {
					blue: 'hsl(var(--medical-blue))',
					'blue-light': 'hsl(var(--medical-blue-light))',
					'blue-dark': 'hsl(var(--medical-blue-dark))',
					teal: 'hsl(var(--medical-teal))',
					green: 'hsl(var(--medical-green))'
				},
				brand: {
					'nextdoc-uk': 'hsl(var(--brand-nextdoc-uk))',
					'nextdoc-uk-hover': 'hsl(var(--brand-nextdoc-uk-hover))',
					'nextdoc-india': 'hsl(var(--brand-nextdoc-india))',
					'nextdoc-india-hover': 'hsl(var(--brand-nextdoc-india-hover))',
					'nextdoc-pg': 'hsl(var(--brand-nextdoc-pg))',
					'nextdoc-pg-hover': 'hsl(var(--brand-nextdoc-pg-hover))',
					'nextdoc-med': 'hsl(var(--brand-nextdoc-med))',
					'nextdoc-med-hover': 'hsl(var(--brand-nextdoc-med-hover))',
					'nextdoc-care': 'hsl(var(--brand-nextdoc-care))',
					'nextdoc-care-hover': 'hsl(var(--brand-nextdoc-care-hover))',
					'nextdoc-labs': 'hsl(var(--brand-nextdoc-labs))',
					'nextdoc-labs-hover': 'hsl(var(--brand-nextdoc-labs-hover))',
					'ndg-academy': 'hsl(var(--brand-ndg-academy))',
					'ndg-academy-hover': 'hsl(var(--brand-ndg-academy-hover))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			grey: '#374151',
			lightGrey: '#f1f5f9',
			greybtn: '#d1d5db',
			grey3: '#4b5563',
			primary: '#2563eb',
			bluetext: '#3b82f6',
			red: '#dc2626',
			tmobile: '#E20074',
			att: '#00a8e0',
			spectrum: '#003057',
		},
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()',
				})
				isFirefoxRule.append(container.nodes)
				container.append(isFirefoxRule)
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`
				})
			})
		}),
	],
}

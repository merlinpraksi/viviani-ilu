/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'british-castilla': ['British Castilla', 'sans-serif'],
          },
          fontSize: {
            '80': '80px',
          },
          lineHeight: {
            'normal': 'normal',
          },
          textTransform: {
            'capitalize': 'capitalize',
          },
          colors: {
            'golden': 'var(--golden, #F4B52B)',
          },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

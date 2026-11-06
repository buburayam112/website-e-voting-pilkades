/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #1B51A3)',
          50: '#F0F5FC',
          100: '#E1EBF9',
          200: '#C2D7F3',
          300: '#94BBEA',
          400: '#5E9AE0',
          500: '#1B51A3',
          600: '#154185',
          700: '#103369',
          800: '#0C264D',
          900: '#081A34',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #5172AE)',
          50: '#F4F6FB',
          100: '#E6EBF5',
          200: '#CCD7EC',
          300: '#A4B9DE',
          400: '#7595CB',
          500: '#5172AE',
          600: '#3D598E',
          700: '#2F456E',
          800: '#223250',
          900: '#172236',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #3FC6F3)',
          50: '#F0FBFE',
          100: '#DEF6FD',
          200: '#B5EDFC',
          300: '#7DE0FA',
          400: '#3FC6F3',
          500: '#12B0E6',
          600: '#088FBE',
          700: '#097197',
          800: '#0D5B78',
          900: '#0E4D64',
        },
        mempawah: {
          cobalt: '#1B51A3',
          prussian: '#5172AE',
          sea: '#3FC6F3',
          bg: '#F5F8FC',
          surface: '#FFFFFF',
          text: '#243447',
          muted: '#627D98',
          border: '#D9E2EC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 81, 163, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 30px -4px rgba(27, 81, 163, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px -5px rgba(63, 198, 243, 0.35)',
      }
    },
  },
  plugins: [],
}


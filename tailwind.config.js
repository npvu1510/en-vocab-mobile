/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    screens: {
      tablet: '600px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f38e0a',
          light: {
            DEFAULT: '#ffb444',
            transparent: '#ffb44488',
          },
          dark: {
            DEFAULT: '#cc7300',
            trans: '#cc730088',
          },
          ripple: '#f3960a26',
        },
        background: {
          light: '#ffffff', // nền sáng
          dark: '#121212', // nền tối
        },
        surface: {
          light: '#f9f9f9',
          dark: '#1e1e1e',
        },
        text: {
          DEFAULT: '#1e1e1e', // màu chữ chính
          secondary: '#555555',
          light: '#f9f9f9', // chữ trên nền tối
        },
        border: {
          DEFAULT: '#e5e5e5',
        },
        white: {
          DEFAULT: '#ffffff',
          trans: '#ffffffb0',
        },
        black: {
          DEFAULT: '#000000',
          light: '#1C1C1E',
        },
        gray: {
          DEFAULT: '#64748b',
          light: '#a0abbb',
          dark: '#333A48',
        },
        success: {
          DEFAULT: '#22c55e',
          light: '#86efac',
        },
        danger: {
          DEFAULT: '#ef4444',
          light: '#fca5a5',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#93c5fd',
        },
      },
      fontSize: {
        title: ['50px'],
      },
      spacing: {
        test: '150px',
      },
    },
  },
  plugins: [],
};

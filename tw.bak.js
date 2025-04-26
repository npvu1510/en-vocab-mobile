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
          light: {
            DEFAULT: '#eba43a',
            transparent: '#eba43a73',
            ripple: '#f3960a26',
          },
          dark: {
            DEFAULT: '#F26109',
            trans: '#f26209a0',
          },
          DEFAULT: '#f38e0a',
        },
        white: {
          DEFAULT: '#ffffff',
          trans: '#ffffffb0',
        },
        gray: {
          DEFAULT: '#64748b',
          light: '#a0abbb',
          dark: '#333A48',
        },
        black: {
          DEFAULT: '#000000',
          light: '#1C1C1E',
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

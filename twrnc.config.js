/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '600px',
    },
    fontSize: {
      // General
      xxs: ['10px', { lineHeight: '14px' }],
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '56px' }],

      // Semantic
      'app-name': ['64px', { lineHeight: '72px' }],
      'app-name-tablet': ['120px', { lineHeight: '130px' }],

      slogan: ['24px', { lineHeight: '32px' }],
      'slogan-tablet': ['70px', { lineHeight: '36px' }],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f38e0a',

          light: {
            DEFAULT: '#ffb444',
            transparent: '#ffb4443d',
            'transparent-2': '#ffb444a0',
          },
          dark: {
            DEFAULT: '#cc7300',
            transparent: '#cc730088',
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
          transparent: '#ffffff58',
        },
        black: {
          DEFAULT: '#000000',
          light: '#1C1C1E',
          transparent: '#0000005c',
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
        0.5: '0.125rem', // 2
        1: '0.25rem', // 4
        1.5: '0.375rem', // 6
        2: '0.5rem', // 8
        2.5: '0.625rem', // 10
        3: '0.75rem', // 12
        3.5: '0.875rem', // 14
        4: '1rem', // 16
        4.5: '1.125rem', // 18
        5: '1.25rem', // 20
        6: '1.5rem', // 24
        7.5: '1.875rem', // 30
        8: '2rem', // 32
        12: '3rem', // 48
        16: '4rem', // 64
        18: '4.5rem', // 72
        32: '8rem', // 128
      },
    },
  },
  plugins: [],
};

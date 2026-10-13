import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090A',
          soft: '#0D0E10',
          raised: '#131417',
        },
        graphite: {
          DEFAULT: '#17181C',
          soft: '#1E2024',
          border: '#2A2C31',
        },
        pearl: {
          DEFAULT: '#F4F2EC',
          dim: '#A7A8AD',
          faint: '#6D6F75',
        },
        lime: {
          DEFAULT: '#C6FF4A',
          soft: '#DCFF8F',
          dim: '#7C9645',
          deep: '#4E5E2C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        label: '0.22em',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(198,255,74,0.25)',
        card: '0 20px 60px -30px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;

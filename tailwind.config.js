/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        paper: '#f4f1ea',
        ink: '#1a1a1a',
        rule: '#c9c4b8',
        muted: '#6b6657',
        link: '#1a4e8a',
        visited: '#6a3d8f',
        accent: '#8a1a1a',
        success: '#2d5a2d',
        warning: '#8a5a1a',
        error: '#8a1a1a',
        panel: '#ebe6d8',
      },
      maxWidth: {
        prose: '680px',
        page: '960px',
      },
    },
  },
  plugins: [],
};

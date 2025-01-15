/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out',
            },
            keyframes: {
                'slide-in': {
                    '0%': {transform: 'translateX(100%)', opacity: '0'},
                    '100%': {transform: 'translateX(0)', opacity: '1'},
                },
            },
        },
    },
    plugins: [],
};
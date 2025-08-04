/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- Add this line!
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'rotate-360': 'rotate360 1s ease-in-out',
        'rotate-180': 'rotate180 0.7s ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'float-diagonal': 'floatDiagonal 10s ease-in-out infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
        'soft-bounce': 'softBounce 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'spin-slow': 'spinSlow 8s linear infinite',
        'spin-reverse': 'spinReverse 6s linear infinite',
        'data-flow': 'dataFlow 3s linear infinite',
        'matrix-rain': 'matrixRain 4s linear infinite',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-15px) translateX(10px)' },
        },
        floatDiagonal: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-25px) translateX(-15px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0.3' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '50%': { transform: 'translateX(100px) translateY(50px)', opacity: '0.7' },
          '100%': { transform: 'translateX(200px) translateY(100px)', opacity: '0' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100px)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
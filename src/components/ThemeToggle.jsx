// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  // Fix the destructuring footprint to map perfectly to your hook's return object
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className="relative items-center inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-slate-700"
    >
      {/* 
        The Moving Thumb: 
        Shifts smoothly along the X-axis via Tailwind's transition utilities.
        The layout uses arbitrary classes or native v4 transforms to shift 24px (translate-x-6) when dark.
      */}
      <span
        className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center
          ${isDark ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {/* Light Mode Icon (Sun) - Centered inside the thumb when light */}
        <svg
          className={`h-4 w-4 text-amber-500 transition-opacity duration-100 absolute
            ${isDark ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        {/* Dark Mode Icon (Moon) - Centered inside the thumb when dark */}
        <svg
          className={`h-4 w-4 text-slate-700 transition-opacity duration-100 absolute
            ${isDark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </button>
  );
};
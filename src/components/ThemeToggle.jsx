// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {/* 
        Leverage Tailwind's variants to handle conditional rendering implicitly.
        This prevents icon flickering or mismatch during the initial render hydration.
      */}
      <span className="dark:hidden text-slate-800">🌙</span>
      <span className="hidden dark:inline text-amber-400">☀️</span>
    </button>
  );
};
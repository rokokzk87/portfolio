"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 rounded-full border border-slate-600 bg-slate-900/90 px-3 py-1 text-xs text-slate-100 shadow"
      aria-label="Переключить тему"
    >
      {theme === "dark" ? "☀️ Светлая" : "🌙 Тёмная"}
    </button>
  );
}

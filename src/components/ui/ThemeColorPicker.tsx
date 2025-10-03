"use client";

import { useEffect, useState } from "react";
import { Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define our color themes
const themes = [
  { name: "Blue", color: "oklch(0.6 0.118 264.7)", ring: "oklch(0.6 0.118 264.7)" },
  { name: "Green", color: "oklch(0.65 0.15 150)", ring: "oklch(0.65 0.15 150)" },
  { name: "Orange", color: "oklch(0.7 0.16 55)", ring: "oklch(0.7 0.16 55)" },
  { name: "Rose", color: "oklch(0.7 0.15 10)", ring: "oklch(0.7 0.15 10)" },
  { name: "Violet", color: "oklch(0.65 0.2 280)", ring: "oklch(0.65 0.2 280)" },
];

const STORAGE_KEY = "devui-theme-color";

export default function ThemeColorPicker() {
  const [mounted, setMounted] = useState(false);
  const [activeColor, setActiveColor] = useState(themes[0].color);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedThemeName = localStorage.getItem(STORAGE_KEY);
    const savedTheme = themes.find((t) => t.name === savedThemeName);

    if (savedTheme) {
      handleThemeChange(savedTheme, false); // Don't re-save on initial load
    } else {
      // If no theme is saved, get the current color from CSS
      const currentColor = getComputedStyle(document.body).getPropertyValue('--primary').trim();
      setActiveColor(currentColor);
    }
  }, []);

  // Function to change theme and save to localStorage
  const handleThemeChange = (theme: typeof themes[0], save = true) => {
    document.body.style.setProperty('--primary', theme.color);
    document.body.style.setProperty('--ring', theme.ring);
    // Also update sidebar colors for consistency
    document.body.style.setProperty('--sidebar-primary', theme.color);
    document.body.style.setProperty('--sidebar-ring', theme.ring);
    
    setActiveColor(theme.color);

    if (save) {
      localStorage.setItem(STORAGE_KEY, theme.name);
    }
  };

  if (!mounted) {
    return null; // Don't render anything on the server
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <div className="absolute bottom-full right-0 mb-4 grid grid-cols-5 gap-2 rounded-lg border bg-background/80 p-2 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        {themes.map((theme) => (
          <button
            key={theme.name}
            aria-label={`Switch to ${theme.name} theme`}
            onClick={() => handleThemeChange(theme)}
            className="h-8 w-8 rounded-full border-2 transition-transform hover:scale-110"
            style={{ 
              backgroundColor: theme.color,
              borderColor: activeColor === theme.color ? "var(--foreground)" : "transparent"
            }}
          />
        ))}
      </div>

      <Button variant="outline" size="icon" className="h-12 w-12 rounded-full shadow-lg">
        <Paintbrush className="h-6 w-6" />
        <span className="sr-only">Change Theme Color</span>
      </Button>
    </div>
  );
}
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full cursor-pointer"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-8 w-8 transition-transform duration-300" />
      ) : (
        <Moon className="h-8 w-8 transition-transform duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;

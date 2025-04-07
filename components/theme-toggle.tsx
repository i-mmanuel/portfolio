"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch by only rendering after mount
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const isDark = theme === "dark";

	return (
		<div className="flex items-center space-x-2">
			<Sun className="h-[1rem] w-[1rem] text-muted-foreground" />
			<Switch
				id="theme-toggle"
				checked={isDark}
				onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
				aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
			/>
			<Moon className="h-[1rem] w-[1rem] text-muted-foreground" />
			<Label htmlFor="theme-toggle" className="text-xs text-muted-foreground cursor-pointer select-none">
				{isDark ? "Dark" : "Light"}
			</Label>
		</div>
	);
}

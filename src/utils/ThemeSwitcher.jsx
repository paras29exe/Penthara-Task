import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => (
        localStorage.getItem('theme') || 'light'
    ));

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
       <div className="flex items-center gap-3">            
            {/* Toggle Switch */}
            <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDark 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle theme"
            >
                <span
                    className={`h-4 w-4 transform rounded-full bg-white transition-transform shadow-lg ${
                        isDark ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
                
                {/* Icons inside the toggle */}
                <span className={`absolute left-1 top-1 text-xs transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    ☀️
                </span>
                <span className={`absolute right-1 top-1 text-xs transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    🌙
                </span>
            </button>
            
            <span className="text-sm text-gray-600 dark:text-gray-400">
                {isDark ? 'Dark' : 'Light'}
            </span>
        </div>
    );
}

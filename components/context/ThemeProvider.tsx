'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface CustomThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
}

export function ThemeProvider({
  children,
  attribute,
  defaultTheme,
}: CustomThemeProviderProps) {
  return (
    <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme}>
      {children}
    </NextThemesProvider>
  );
}

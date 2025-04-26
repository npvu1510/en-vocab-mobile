// src/hooks/useInitTheme.ts
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useAppStore } from './useAppStorage';

export const useInitTheme = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    const initTheme = async () => {
      if (theme) {
        setColorScheme(theme);
      } else {
        const deviceTheme = Appearance.getColorScheme() ?? 'light';
        setColorScheme(deviceTheme);
        setTheme(deviceTheme);
      }
    };

    initTheme();
  }, []);
};

// // src/store/useAppStore.ts
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { create } from 'zustand';
// import { createJSONStorage, persist } from 'zustand/middleware';

// type AppState = {
//   hasSeenWelcome: boolean;
//   setHasSeenWelcome: (val: boolean) => void;
// };

// export const useAppStore = create<AppState>()(
//   persist(
//     (set) => ({
//       hasSeenWelcome: false,
//       setHasSeenWelcome: (val: boolean) => set({ hasSeenWelcome: val }),
//     }),
//     {
//       name: 'app-storage',
//       storage: createJSONStorage(() => AsyncStorage),
//     }
//   )
// );

// src/store/useAppStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

type AppState = {
  hasSeenWelcome: boolean;
  setHasSeenWelcome: (val: boolean) => void;

  theme: Theme;
  setTheme: (val: Theme) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasSeenWelcome: false,
      setHasSeenWelcome: (val: boolean) => set({ hasSeenWelcome: val }),

      theme: 'light', // default
      setTheme: (val: Theme) => set({ theme: val }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

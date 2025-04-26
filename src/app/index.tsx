import { Redirect } from 'expo-router';
import { useAppStore } from '../hooks/useAppStorage';

export default function Index() {
  const { hasSeenWelcome } = useAppStore();

  return hasSeenWelcome ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/welcome" />
  );
}

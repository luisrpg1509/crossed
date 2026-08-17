import { Stack } from 'expo-router';

// Welcome is a full-bleed screen with no native header. Sign up/login get a
// native header (title + automatic back button) since they're a step deeper.
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" options={{ headerShown: true, title: 'Sign Up' }} />
      <Stack.Screen name="login" options={{ headerShown: true, title: 'Log In' }} />
    </Stack>
  );
}

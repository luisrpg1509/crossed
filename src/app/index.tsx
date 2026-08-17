import { Redirect } from 'expo-router';

// Expo Router needs something to render at "/". We don't have auth yet, so
// always land on the Welcome screen for now — this will become a real
// signed-in/signed-out check later.
export default function Index() {
  return <Redirect href="/welcome" />;
}

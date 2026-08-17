import { router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.hero}>
          <ThemedText type="title" style={styles.centerText}>
            Crossed
          </ThemedText>
          <ThemedText type="default" themeColor="textSecondary" style={styles.centerText}>
            Real people. Real places. Real connections.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.actions}>
          <Button label="Get Started" onPress={() => router.push('/sign-up')} />
          <Button label="Log In" variant="secondary" onPress={() => router.push('/login')} />

          {/* TEMP dev-only shortcut: skips auth entirely until it's built. */}
          <Pressable onPress={() => router.replace('/crossed')} style={styles.devLink}>
            <ThemedText type="small" themeColor="textSecondary" style={styles.centerText}>
              Continue for now (dev only)
            </ThemedText>
          </Pressable>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.six,
  },
  hero: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  centerText: {
    textAlign: 'center',
  },
  actions: {
    gap: Spacing.three,
  },
  devLink: {
    marginTop: Spacing.two,
    paddingVertical: Spacing.two,
  },
});

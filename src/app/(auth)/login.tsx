import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/button';
import { TextField } from '@/components/text-field';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <ThemedText type="subtitle">Welcome back</ThemedText>

        <ThemedView style={styles.form}>
          <TextField
            label="Email"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextField label="Password" placeholder="••••••••" secureTextEntry />
        </ThemedView>

        {/* TEMP: no auth yet, so logging in goes straight into the app. */}
        <Button label="Log In" onPress={() => router.replace('/crossed')} />
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
    padding: Spacing.four,
    gap: Spacing.five,
  },
  form: {
    gap: Spacing.four,
  },
});

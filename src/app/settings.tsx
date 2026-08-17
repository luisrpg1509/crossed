import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const rows = ['Privacy', 'Blocked Users', 'Notifications'] as const;

export default function SettingsScreen() {
  // TEMP: this switch doesn't control real proximity detection yet.
  const [discoveryEnabled, setDiscoveryEnabled] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: 'Settings' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <ThemedView type="backgroundElement" style={styles.row}>
          <ThemedText type="default">Discovery</ThemedText>
          <Switch value={discoveryEnabled} onValueChange={setDiscoveryEnabled} />
        </ThemedView>

        {rows.map((row) => (
          <Pressable key={row} style={({ pressed }) => pressed && styles.pressed}>
            <ThemedView type="backgroundElement" style={styles.row}>
              <ThemedText type="default">{row}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}

        <Pressable
          onPress={() => router.replace('/welcome')}
          style={({ pressed }) => pressed && styles.pressed}>
          <ThemedView type="backgroundElement" style={styles.row}>
            <ThemedText type="default">Log Out</ThemedText>
          </ThemedView>
        </Pressable>
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
    gap: Spacing.three,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  pressed: {
    opacity: 0.7,
  },
});

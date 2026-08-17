import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { Button } from '@/components/button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPersonById, mockEncounters } from '@/data/mock-data';

// [id] means this route matches any path like /encounter/1, /encounter/2...
// Expo Router passes that segment in via useLocalSearchParams().
export default function EncounterDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const encounter = mockEncounters.find((item) => item.id === id);
  const person = encounter ? getPersonById(encounter.personId) : undefined;

  const [interested, setInterested] = useState(false);

  if (!encounter || !person) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText>Encounter not found.</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: person.firstName }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <View style={styles.hero}>
          <AvatarPlaceholder label={person.firstName[0]} size={120} />
          <ThemedText type="subtitle">
            {person.firstName}, {person.age}
          </ThemedText>
          {/* Intentionally vague — an encounter happened, not a live location. */}
          <ThemedText type="small" themeColor="textSecondary">
            {encounter.context} · {encounter.timeAgo}
          </ThemedText>
        </View>

        <ThemedView type="backgroundElement" style={styles.bioCard}>
          <ThemedText type="small">{person.bio}</ThemedText>
        </ThemedView>

        {interested ? (
          <ThemedView type="backgroundElement" style={styles.statusCard}>
            <ThemedText type="smallBold">Interested ✓</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              We&apos;ll let you know if it&apos;s mutual.
            </ThemedText>
          </ThemedView>
        ) : (
          <View style={styles.actions}>
            <Button label="Pass" variant="secondary" style={styles.actionButton} onPress={() => router.back()} />
            <Button label="Interested" style={styles.actionButton} onPress={() => setInterested(true)} />
          </View>
        )}
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
    gap: Spacing.four,
    justifyContent: 'space-between',
  },
  hero: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  bioCard: {
    padding: Spacing.four,
    borderRadius: Spacing.four,
  },
  statusCard: {
    padding: Spacing.four,
    borderRadius: Spacing.four,
    alignItems: 'center',
    gap: Spacing.one,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  actionButton: {
    flex: 1,
  },
});

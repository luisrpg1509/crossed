import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPersonById, mockEncounters } from '@/data/mock-data';

export default function CrossedScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <ThemedText type="subtitle">Crossed</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            People you&apos;ve recently crossed paths with.
          </ThemedText>
        </View>

        <ScrollView contentContainerStyle={styles.list}>
          {mockEncounters.map((encounter) => {
            const person = getPersonById(encounter.personId);
            if (!person) return null;

            return (
              <Pressable
                key={encounter.id}
                onPress={() => router.push(`/encounter/${encounter.id}`)}
                style={({ pressed }) => pressed && styles.pressed}>
                <ThemedView type="backgroundElement" style={styles.card}>
                  <AvatarPlaceholder label={person.firstName[0]} size={52} />
                  <View style={styles.cardText}>
                    <ThemedText type="smallBold">
                      {person.firstName}, {person.age}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {encounter.context}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {encounter.timeAgo}
                    </ThemedText>
                  </View>
                </ThemedView>
              </Pressable>
            );
          })}
        </ScrollView>
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
    paddingHorizontal: Spacing.four,
  },
  header: {
    paddingVertical: Spacing.three,
    gap: Spacing.half,
  },
  list: {
    gap: Spacing.three,
    paddingBottom: Spacing.six,
  },
  pressed: {
    opacity: 0.7,
  },
  card: {
    flexDirection: 'row',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.four,
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    gap: 2,
  },
});

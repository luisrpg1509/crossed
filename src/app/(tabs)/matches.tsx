import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPersonById, mockMatches } from '@/data/mock-data';

export default function MatchesScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ThemedText type="subtitle" style={styles.title}>
          Matches
        </ThemedText>

        <View style={styles.list}>
          {mockMatches.map((match) => {
            const person = getPersonById(match.personId);
            if (!person) return null;

            return (
              <ThemedView key={match.id} type="backgroundElement" style={styles.card}>
                <AvatarPlaceholder label={person.firstName[0]} size={52} />
                <View style={styles.cardText}>
                  <ThemedText type="smallBold">{person.firstName}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    You matched · {match.matchedAgo}
                  </ThemedText>
                </View>
              </ThemedView>
            );
          })}
        </View>
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
  title: {
    paddingVertical: Spacing.three,
  },
  list: {
    gap: Spacing.three,
  },
  card: {
    flexDirection: 'row',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.four,
    alignItems: 'center',
  },
  cardText: {
    gap: 2,
  },
});

import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { Button } from '@/components/button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { mockCurrentUser } from '@/data/mock-data';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.hero}>
          <AvatarPlaceholder label={mockCurrentUser.firstName[0]} size={96} />
          <ThemedText type="subtitle">
            {mockCurrentUser.firstName}, {mockCurrentUser.age}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.centerText}>
            {mockCurrentUser.bio}
          </ThemedText>
        </View>

        <View style={styles.actions}>
          <Button label="Edit Profile" variant="secondary" />
          <Button label="Settings" variant="secondary" onPress={() => router.push('/settings')} />
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
    paddingTop: Spacing.six,
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
});

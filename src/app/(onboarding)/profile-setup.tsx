import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { Button } from '@/components/button';
import { TextField } from '@/components/text-field';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

// Placeholder onboarding form — fields don't validate or save anything yet.
export default function ProfileSetupScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedText type="subtitle">Set up your profile</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            This is what people will see when you cross paths.
          </ThemedText>

          <View style={styles.section}>
            <ThemedText type="small" themeColor="textSecondary">
              Photos
            </ThemedText>
            <View style={styles.photoRow}>
              <AvatarPlaceholder label="+" size={72} />
              <AvatarPlaceholder label="+" size={72} />
              <AvatarPlaceholder label="+" size={72} />
            </View>
          </View>

          <View style={styles.form}>
            <TextField label="Name" placeholder="Your name" />
            <TextField label="Birthday" placeholder="MM / DD / YYYY" />
            <TextField label="Gender" placeholder="How you identify" />
            <TextField label="Short bio" placeholder="Tell people a bit about you" multiline />
            <TextField label="What are you looking for?" placeholder="Friends, dating, networking..." />
          </View>
        </ScrollView>

        <Button label="Finish" onPress={() => router.replace('/crossed')} />
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
    paddingBottom: Spacing.four,
    gap: Spacing.three,
  },
  scrollContent: {
    gap: Spacing.four,
    paddingVertical: Spacing.four,
  },
  section: {
    gap: Spacing.two,
  },
  photoRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  form: {
    gap: Spacing.four,
  },
});

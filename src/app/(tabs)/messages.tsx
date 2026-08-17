import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarPlaceholder } from '@/components/avatar-placeholder';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPersonById, mockConversations } from '@/data/mock-data';

export default function MessagesScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ThemedText type="subtitle" style={styles.title}>
          Messages
        </ThemedText>

        <View style={styles.list}>
          {mockConversations.map((conversation) => {
            const person = getPersonById(conversation.personId);
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            if (!person) return null;

            return (
              <Pressable
                key={conversation.id}
                onPress={() => router.push(`/chat/${conversation.id}`)}
                style={({ pressed }) => pressed && styles.pressed}>
                <ThemedView type="backgroundElement" style={styles.card}>
                  <AvatarPlaceholder label={person.firstName[0]} size={52} />
                  <View style={styles.cardText}>
                    <ThemedText type="smallBold">{person.firstName}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
                      {lastMessage?.text}
                    </ThemedText>
                  </View>
                </ThemedView>
              </Pressable>
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

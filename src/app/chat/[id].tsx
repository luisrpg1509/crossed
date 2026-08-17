import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TextField } from '@/components/text-field';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPersonById, mockConversations } from '@/data/mock-data';
import { useTheme } from '@/hooks/use-theme';

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const conversation = mockConversations.find((item) => item.id === id);
  const person = conversation ? getPersonById(conversation.personId) : undefined;
  const theme = useTheme();

  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState(conversation?.messages ?? []);

  if (!conversation || !person) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText>Conversation not found.</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    // TEMP: local-only state, nothing is persisted or sent to anyone yet.
    setMessages((current) => [...current, { id: `local-${current.length}`, sender: 'me', text }]);
    setDraft('');
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: person.firstName }} />
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messageList}
            renderItem={({ item }) => (
              <View style={[styles.bubbleRow, item.sender === 'me' && styles.bubbleRowMe]}>
                <ThemedView type={item.sender === 'me' ? 'text' : 'backgroundElement'} style={styles.bubble}>
                  <ThemedText type="small" themeColor={item.sender === 'me' ? 'background' : 'text'}>
                    {item.text}
                  </ThemedText>
                </ThemedView>
              </View>
            )}
          />

          <View style={styles.inputRow}>
            <View style={styles.inputField}>
              <TextField
                placeholder="Type a message..."
                value={draft}
                onChangeText={setDraft}
                onSubmitEditing={handleSend}
                returnKeyType="send"
              />
            </View>
            <Pressable onPress={handleSend} style={[styles.sendButton, { backgroundColor: theme.text }]}>
              <Ionicons name="send" size={18} color={theme.background} />
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  messageList: {
    padding: Spacing.four,
    gap: Spacing.two,
  },
  bubbleRow: {
    flexDirection: 'row',
  },
  bubbleRowMe: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.four,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.three,
    paddingTop: Spacing.two,
  },
  inputField: {
    flex: 1,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

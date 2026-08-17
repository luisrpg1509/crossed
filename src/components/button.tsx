import { Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type ButtonProps = {
  label: string;
  onPress?: PressableProps['onPress'];
  /** primary = filled, secondary = subtle background. Defaults to primary. */
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
};

export function Button({ label, onPress, variant = 'primary', style }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [style, pressed && styles.pressed]}>
      <ThemedView type={isPrimary ? 'text' : 'backgroundElement'} style={styles.button}>
        <ThemedText type="smallBold" themeColor={isPrimary ? 'background' : 'text'}>
          {label}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.four,
    alignItems: 'center',
  },
});

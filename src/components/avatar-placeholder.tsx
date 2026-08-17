import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

type AvatarPlaceholderProps = {
  /** Usually a first initial, e.g. "M". Stands in for a real photo. */
  label: string;
  size?: number;
};

export function AvatarPlaceholder({ label, size = 56 }: AvatarPlaceholderProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.circle,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: theme.backgroundElement },
      ]}>
      <Text style={{ color: theme.textSecondary, fontSize: size * 0.4, fontWeight: '600' }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

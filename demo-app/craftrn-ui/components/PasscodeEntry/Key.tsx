import React from 'react';
import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const config = {
  keySize: 70,
};

/**
 * Props for the Key component.
 */
export type Props = {
  /**
   * Callback function triggered when the key is pressed.
   */
  onPress: () => void;
  /**
   * The content to display inside the key.
   */
  children: React.ReactNode;
};

export const Key = ({ onPress, children }: Props) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => <View style={styles.key(pressed)}>{children}</View>}
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ colors, borderRadius }) => ({
  key: (pressed: boolean) => ({
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    width: config.keySize,
    height: config.keySize,
    backgroundColor: pressed
      ? colors.backgroundTertiary
      : colors.backgroundPrimary,
  }),
}));

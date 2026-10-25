import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface BouncyPressableProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
  scaleTo?: number;
}

export const BouncyPressable: React.FC<BouncyPressableProps> = ({
  children,
  style,
  className,
  scaleTo = 0.96,
  onPressIn,
  onPressOut,
  ...rest
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      className={className}
      style={[ { minHeight: 56 }, style, animatedStyle ]}
      onPressIn={(e) => {
        scale.value = withSpring(scaleTo, { damping: 14, stiffness: 260 });
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        scale.value = withSpring(1, { damping: 12, stiffness: 240 });
        onPressOut?.(e);
      }}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
};

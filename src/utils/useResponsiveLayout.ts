import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ResponsiveLayoutInfo {
  width: number;
  height: number;
  shortSide: number;
  longSide: number;
  isLandscape: boolean;
  isTablet: boolean;
  isPhoneLandscape: boolean;
  isTabletLandscape: boolean;
  isSmallPhone: boolean;
  insets: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  horizontalPadding: number;
}

/**
 * Shared orientation- & device-aware responsive hook.
 * Uses `shortSide >= 600` so landscape phones (e.g. 844x390) are NEVER
 * misclassified as tablets.
 */
export function useResponsiveLayout(): ResponsiveLayoutInfo {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const shortSide = Math.min(width, height);
  const longSide = Math.max(width, height);
  const isLandscape = width > height;
  const isTablet = shortSide >= 600;
  const isPhoneLandscape = !isTablet && isLandscape;
  const isTabletLandscape = isTablet && isLandscape;
  const isSmallPhone = !isTablet && !isLandscape && shortSide < 380;

  const horizontalPadding = isTablet ? 24 : isPhoneLandscape ? 16 : 14;

  return {
    width,
    height,
    shortSide,
    longSide,
    isLandscape,
    isTablet,
    isPhoneLandscape,
    isTabletLandscape,
    isSmallPhone,
    insets,
    horizontalPadding,
  };
}

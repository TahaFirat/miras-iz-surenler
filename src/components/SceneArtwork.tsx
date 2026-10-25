import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { resolveImageAsset } from "../utils/imageAssets";
import { AtmosphereType, VisualMode } from "../data/storiesData";

export type { AtmosphereType };

export interface SceneHotspotItem {
  id: string;
  label: string;
  title: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface SceneArtworkProps {
  imagePath: string;
  atmosphereType?: AtmosphereType;
  visualMode?: VisualMode;
  accentColor?: string;
  height?: number;
  style?: StyleProp<ViewStyle>;
  showBottomGradient?: boolean;
  sceneNumber?: number;
  sceneVisualNote?: string;
  sceneHistoricalNote?: string;
  hotspots?: SceneHotspotItem[];
  enableDiscoveryHotspots?: boolean;
  children?: React.ReactNode;
}

/**
 * Pure, distraction-free Pixar / Storybook film frame component.
 * - Strictly pinned height (`height`, `minHeight`, `maxHeight`, `flexShrink: 0`)
 * - Synchronous image render (`key={imagePath}`) with zero text clutter on top of artwork
 */
export const SceneArtwork: React.FC<SceneArtworkProps> = ({
  imagePath,
  height = 360,
  style,
  showBottomGradient = false,
  children,
}) => {
  const activeSource: ImageSourcePropType | null = resolveImageAsset(imagePath);

  return (
    <View
      style={[
        styles.container,
        {
          height,
          minHeight: height,
          maxHeight: height,
          flexShrink: 0,
        },
        style,
      ]}
    >
      {activeSource && (
        <Image
          key={imagePath}
          source={activeSource}
          fadeDuration={0}
          resizeMode="cover"
          style={styles.image}
        />
      )}

      {showBottomGradient && (
        <LinearGradient
          pointerEvents="none"
          colors={[
            "transparent",
            "rgba(15, 23, 42, 0.35)",
            "rgba(15, 23, 42, 0.88)",
          ]}
          locations={[0, 0.5, 1]}
          style={StyleSheet.absoluteFillObject}
        />
      )}

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#1E1B4B",
    position: "relative",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

import React from "react";
import { View, Text, Platform } from "react-native";
import { Tabs } from "expo-router";
import { Home, Landmark, Shield } from "lucide-react-native";
import * as Haptics from "expo-haptics";
import { BouncyPressable } from "../../src/components/BouncyPressable";
import { useResponsiveLayout } from "../../src/utils/useResponsiveLayout";

const TAB_ITEMS = [
  {
    name: "index",
    label: "Hikâyeler",
    Icon: Home,
  },
  {
    name: "museum",
    label: "Miras Müzesi",
    Icon: Landmark,
  },
  {
    name: "profile",
    label: "Profil & Arma",
    Icon: Shield,
  },
] as const;

export default function TabsLayout() {
  const { isTablet, isPhoneLandscape, isLandscape, insets } =
    useResponsiveLayout();

  // Keep comfortable clearance for iOS Home Indicator & Android system nav bar
  // while staying ultra-compact in phone landscape so vertical space goes to content.
  const bottomSafeMargin = isPhoneLandscape
    ? Math.max(insets.bottom, 6)
    : Math.max(
        insets.bottom,
        Platform.OS === "android" ? 14 : Platform.OS === "ios" ? 12 : 10
      );

  const horizontalSafe = Math.max(
    isTablet ? 24 : 12,
    insets.left + 8,
    insets.right + 8
  );

  const useRowTabItems = isTablet || isPhoneLandscape;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, navigation }) => (
        <View
          pointerEvents="box-none"
          style={{
            backgroundColor: "#F7F3E8",
            paddingTop: isPhoneLandscape ? 4 : 6,
            paddingBottom: bottomSafeMargin,
            paddingHorizontal: horizontalSafe,
            borderTopWidth: 1,
            borderTopColor: "#E6DEC8",
          }}
        >
          <View
            style={{
              maxWidth: isTablet ? 580 : isPhoneLandscape ? 540 : 480,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "#1E1B4B",
              borderRadius: isPhoneLandscape ? 16 : 20,
              padding: isPhoneLandscape ? 4 : 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1.5,
              borderColor: "#312E81",
              borderBottomWidth: isPhoneLandscape ? 3 : 4,
              borderBottomColor: "#0F172A",
              shadowColor: "#0F172A",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 10,
              elevation: 8,
            }}
          >
            {TAB_ITEMS.map((item, index) => {
              const isFocused = state.index === index;
              const IconComponent = item.Icon;

              const onPress = () => {
                if (Platform.OS !== "web") {
                  Haptics.selectionAsync().catch(() => {});
                }
                const route = state.routes[index];
                if (!route) return;
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              return (
                <BouncyPressable
                  key={item.name}
                  onPress={onPress}
                  scaleTo={0.96}
                  style={{
                    flex: 1,
                    flexDirection: useRowTabItems ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: isPhoneLandscape
                      ? 6
                      : isTablet
                      ? 10
                      : 7,
                    paddingHorizontal: 6,
                    borderRadius: isPhoneLandscape ? 12 : 15,
                    backgroundColor: isFocused ? "#F59E0B" : "transparent",
                    borderBottomWidth: isFocused ? 2.5 : 0,
                    borderBottomColor: isFocused ? "#B45309" : "transparent",
                  }}
                >
                  <IconComponent
                    size={isPhoneLandscape ? 16 : isTablet ? 19 : 18}
                    color={isFocused ? "#1C1917" : "#CBD5E1"}
                    strokeWidth={isFocused ? 2.6 : 2.1}
                  />
                  <Text
                    style={{
                      color: isFocused ? "#1C1917" : "#E2E8F0",
                      fontSize: isPhoneLandscape ? 12 : isTablet ? 13 : 11,
                      lineHeight: isPhoneLandscape ? 16 : isTablet ? 17 : 14,
                      fontWeight: isFocused ? "900" : "700",
                      marginLeft: useRowTabItems ? 6 : 0,
                      marginTop: useRowTabItems ? 0 : 2,
                      textAlign: "center",
                    }}
                    numberOfLines={1}
                  >
                    {item.label}
                  </Text>
                </BouncyPressable>
              );
            })}
          </View>
        </View>
      )}
    >
      <Tabs.Screen name="index" options={{ title: "Hikâyeler" }} />
      <Tabs.Screen name="museum" options={{ title: "Miras Müzesi" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil & Arma" }} />
    </Tabs>
  );
}

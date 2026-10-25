import React from "react";
import { View, Text, Platform, useWindowDimensions } from "react-native";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Home, Landmark, Shield } from "lucide-react-native";
import * as Haptics from "expo-haptics";
import { BouncyPressable } from "../../src/components/BouncyPressable";

const TAB_ITEMS = [
  {
    name: "index",
    label: "Ana Menü",
    Icon: Home,
  },
  {
    name: "museum",
    label: "Miras Müzesi",
    Icon: Landmark,
  },
  {
    name: "profile",
    label: "Profil & Sancak",
    Icon: Shield,
  },
] as const;

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  // Extra bottom clearance so Android 3-button nav, Android gesture bar,
  // iOS Home Indicator, and mobile browser bars NEVER overlap or clip the nav bar.
  const bottomSafeMargin = Math.max(
    insets.bottom,
    Platform.OS === "android" ? 18 : Platform.OS === "ios" ? 20 : 12
  );

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
            paddingTop: 6,
            paddingBottom: bottomSafeMargin,
            paddingHorizontal: isTablet ? 24 : 12,
            borderTopWidth: 1,
            borderTopColor: "#E6DEC8",
          }}
        >
          <View
            style={{
              maxWidth: isTablet ? 560 : 480,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "#1E1B4B",
              borderRadius: 22,
              padding: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1.5,
              borderColor: "#312E81",
              borderBottomWidth: 4,
              borderBottomColor: "#0F172A",
              shadowColor: "#0F172A",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.2,
              shadowRadius: 12,
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
                    flexDirection: isTablet ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: isTablet ? 10 : 7,
                    paddingHorizontal: 6,
                    borderRadius: 16,
                    backgroundColor: isFocused ? "#F59E0B" : "transparent",
                    borderBottomWidth: isFocused ? 3 : 0,
                    borderBottomColor: isFocused ? "#B45309" : "transparent",
                  }}
                >
                  <IconComponent
                    size={isTablet ? 19 : 18}
                    color={isFocused ? "#1C1917" : "#CBD5E1"}
                    strokeWidth={isFocused ? 2.6 : 2.1}
                  />
                  <Text
                    style={{
                      color: isFocused ? "#1C1917" : "#E2E8F0",
                      fontSize: isTablet ? 13 : 11,
                      lineHeight: isTablet ? 17 : 14,
                      fontWeight: isFocused ? "900" : "700",
                      marginLeft: isTablet ? 7 : 0,
                      marginTop: isTablet ? 0 : 3,
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
      <Tabs.Screen name="index" options={{ title: "Ana Menü" }} />
      <Tabs.Screen name="museum" options={{ title: "Miras Müzesi" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil & Sancak" }} />
    </Tabs>
  );
}

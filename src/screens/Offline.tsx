import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Colors, Text } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook

  return (
    <View>
      <Text>
        {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
        vous n'etes pas conecter
      </Text>
    </View>
  );
};

// ./src/components/Header.tsx
import { Headline, Text } from "react-native-paper";
import { StyleSheet, View } from 'react-native';
import React from "react";

export const Header = (props : any) => {

    
  return (
    <View style={styles.container}>
      <Headline style={styles.header}>
        {props.title}
      </Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
    backgroundColor:'aqua',
    padding:100,
  },
});

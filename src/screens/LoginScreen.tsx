import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { Header } from "../components/Header";
import InputEmail from "../components/TextInputEmail";
import Input from "../components/TextInputEmail";
import InputPassword from "../components/TextInputPassword";
import Login from "../components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.welcome}>Welcome to StarPort</Text>
      </View> */}
      <Header title={"Welcome to StarPort"} />
      <InputEmail />
      <InputPassword />
      <Login />

      {/*
      <View>
      <TextInput style={styles.email} label={'Email'}></TextInput>
      <TextInput secureTextEntry={true} style={styles.email} label={'Password'}></TextInput>
      <Button color="white" style={styles.bouton}>Login</Button>
      <Text style={styles.terms}> Read condition and tearms</Text>
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  welcome: {
    backgroundColor: "aqua",
    padding: 100,
  },
  email: {
    backgroundColor: "white",
    marginTop: 40,
    borderWidth: 1,
    borderColor: "black",
  },
  bouton: {
    backgroundColor: "aqua",
    padding: 10,
    margin: 50,
    color: "red",
  },
  terms: {
    justifyContent: "center",
    textAlign: "center",
    color: "grey",
  },
});

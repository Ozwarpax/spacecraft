import * as React from "react";
import { Button } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { Routes } from "../navigation/Routes";

const LoginButton = () => {
  
  const navigation = useNavigation()
  
  const handlePress =()=> (

    navigation.navigate(Routes.STARSHIP_FEED_SCREEN)
  );

  return (
  <Button icon="camera" mode="contained" onPress={handlePress}>
    Login
  </Button>
  )
  };


export default LoginButton;

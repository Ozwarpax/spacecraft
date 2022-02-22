import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { Routes } from './Routes';
import { StarshipFeedScreen } from '../screens/StarshipFeedScreen';


type Props = {}



export const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen  name={Routes.TERMS_SCREEN} component={TermsScreen}  />
      <Stack.Screen  name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen}  />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
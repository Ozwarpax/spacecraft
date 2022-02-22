// App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { NetworkProvider } from 'react-native-offline';

//import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
const App = () => {
 // return <LoginScreen />;
 //return <TermsScreen/>;
 return <QueryClientProvider client={new QueryClient} ><StarshipFeedScreen/></QueryClientProvider>;
};

export default App;
// App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";

import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
//import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from "./src/screens/TermsScreen";
import { Navigator } from "./src/navigation/Navigator";
const App = () => {
  // return <LoginScreen />;
  //return <TermsScreen/>;
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Navigator/>
      {/* <StarshipFeedScreen /> */}
      
    </QueryClientProvider>
  );
};

export default App;

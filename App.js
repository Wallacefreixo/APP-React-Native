import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SafeView from './src/components/SafeView'

import Routes from "./src/routes";

const App = () => (
  <SafeAreaProvider>
    <Routes />
  </SafeAreaProvider>
);

export default App
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //transform function async in sync for promises firebase

import Routes from "./src/routes";
import reducers from './src/reducers';

export default App = () => {

  useEffect(() => {
    //Iniciar Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBJxdRMO4b-d4ILcQIdnwVwNu6_AtHBVKo",
      authDomain: "hobbies-app-45d70.firebaseapp.com",
      projectId: "hobbies-app-45d70",
      storageBucket: "hobbies-app-45d70.appspot.com",
      messagingSenderId: "470078811389",
      appId: "1:470078811389:web:360f6fd860dd5a2aeee294",
      measurementId: "G-KF0ERDPM83"
    })
  })

  return(
    <SafeAreaProvider>
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  )
}

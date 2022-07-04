import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//
import AppNavigation from './navigation/AppNavigation'

//
import { KeyboardProvider } from 'react-native-keyboard-controller'
//
import { Provider } from 'react-redux'
import store from './redux/store'
const app = (): JSX.Element => {
  return (
    <Provider store={store}>
      <KeyboardProvider statusBarTranslucent>
        <AppNavigation />
      </KeyboardProvider>
    </Provider>
  )
}

export default app

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//
import AppNavigation from './navigation/AppNavigation'

//
import { KeyboardProvider } from 'react-native-keyboard-controller'

const app = (): JSX.Element => {
  return (
    <KeyboardProvider statusBarTranslucent>
      <AppNavigation />
    </KeyboardProvider>
  )
}

export default app

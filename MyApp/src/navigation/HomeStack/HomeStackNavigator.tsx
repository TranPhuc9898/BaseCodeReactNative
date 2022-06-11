import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import lib
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/Home/HomeScreen'

//import screen

export type HomeStackParams = {
  HomeScreen: undefined
}

const HomeStack = createStackNavigator<HomeStackParams>()

const HomeStackNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
)

export default HomeStackNavigator

import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
//
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider } from '@ui-kitten/components'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppearanceProvider } from 'react-native-appearance'
import * as eva from '@eva-design/eva'
import HomeStackNavigator from './HomeStack/HomeStackNavigator'

//import Screen
import HomeScreen from '../screens/Home/HomeScreen'
import SideBar from '../components/SideBar/SideBar'
import SideBar2 from '../components/SideBar2/SideBar2'
import FavorScreen from '../screens/FavorScreen/FavorScreen'
import DetailScreen from '@/screens/DetailScreen/DetailScreen'

export type RootStackParams = {
  HomeStackNavigator: undefined
}
export type HomeDrawerParamList = {
  HomeScreen: {}
  FavorScreen: {}
  DetailScreen: {}
}
const Stack = createStackNavigator<RootStackParams>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
      drawerContent={props => <SideBar2 {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="FavorScreen"
        component={FavorScreen}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{
                  headerShown: false
                }}
              />

              <Stack.Screen
                name={'HomeStackNavigator'}
                component={HomeStackNavigator}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  )
}

export default AppNavigation

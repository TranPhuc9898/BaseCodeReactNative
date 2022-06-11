import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
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

export type RootStackParams = {
  HomeStackNavigator: undefined
}
export type HomeDrawerParamList = {
  Main: {}
}
const Stack = createStackNavigator<RootStackParams>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
    >
      <Drawer.Screen
        name="Main"
        component={HomeScreen}
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
                name="Home"
                component={Home}
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

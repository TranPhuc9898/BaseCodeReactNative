import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
//
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SideBar2: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  const handelNavigatePress = () => {
    navigation.navigate('FavorScreen')
  }

  const handelNavigatePressMain = () => {
    navigation.navigate('HomeScreen')
  }
  return (
    <View style={{ flex: 1, paddingTop: 80 }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          padding: 30,
          borderBottomWidth: 2
        }}
      >
        <TouchableOpacity onPress={handelNavigatePress}>
          <Text>SideBar2</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          padding: 30,
          borderBottomWidth: 2
        }}
      >
        <TouchableOpacity onPress={handelNavigatePressMain}>
          <Text>SideBar3</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SideBar2

const styles = StyleSheet.create({})

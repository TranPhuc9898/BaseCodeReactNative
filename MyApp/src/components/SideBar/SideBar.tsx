import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useCallback, useEffect } from 'react'
import { position } from '@shopify/restyle'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

interface ISideBar {
  openMenu?: boolean
}
const SideBar: React.FC<ISideBar> = ({ openMenu }) => {
  const contentTranslateY = useSharedValue(0)
  const contentOpacity = useSharedValue(0)

  useEffect(() => {
    contentTranslateY.value = withSpring(openMenu ? 0 : -280, { damping: 14 })
    contentOpacity.value = withTiming(openMenu ? 1 : 0)
  }, [openMenu])

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateX: contentTranslateY.value }]
  }))
  const navigation = useNavigation()

  const Hello = () => {
    navigation.navigate('FavorScreen')
  }
  return (
    <View style={styles.Container}>
      <Animated.View style={[containerAnimatedStyle]}>
        <View
          style={{
            flexDirection: 'row',
            width: 170,
            padding: 12,
            alignItems: 'center',
            borderBottomWidth: 2
          }}
        >
          <TouchableOpacity onPress={Hello}>
            <Text>FavorScreen</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

export default SideBar

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    zIndex: 99,
    width: 300,
    height: 300,
    top: 90
  }
})

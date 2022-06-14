import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import Rive, { RiveRef } from 'rive-react-native'
import { position } from '@shopify/restyle'
import color from '@/themes/colors/color'

interface IHeader {
  openMenu: boolean
  setIsOpenMenu(openMenu: boolean): void
}
const Header: React.FC<IHeader> = ({ openMenu, setIsOpenMenu }) => {
  //create value
  const containerTranlateX = useSharedValue(0)
  const menuRef = useRef<RiveRef>(null)

  function handleOpenMenu() {
    menuRef.current.play(openMenu ? 'close' : 'open')
    containerTranlateX.value = withSpring(openMenu ? 0 : 230, { damping: 14 })
    setIsOpenMenu(!openMenu)
  }

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: containerTranlateX.value }]
  }))

  return (
    <Animated.View style={styles.Container}>
      <TouchableOpacity style={styles.MenuButton} onPress={handleOpenMenu}>
        <Rive ref={menuRef} resourceName="menu_button" autoplay />
      </TouchableOpacity>
    </Animated.View>
  )
}

export default Header

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9,
    bottom: 10,
    paddingLeft: 15
  },
  MenuButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: color.colors.purple
  }
})

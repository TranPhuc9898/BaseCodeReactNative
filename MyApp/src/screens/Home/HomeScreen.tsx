import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import color from '@/themes/colors/color'
import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'

const HomeScreen = () => {
  const contentRotateY = useSharedValue(0)
  const contentTranslateX = useSharedValue(0)
  const contentScale = useSharedValue(0)

  const [openMenu, setOpenMenu] = useState(false)
  const [openOnboardModal, setOpenOnboardModal] = useState(false)
  const [openSignModal, setOpenSignModal] = useState(false)

  useEffect(() => {
    const options = { damping: 5 }

    contentRotateY.value = withSpring(openMenu ? -30 : 0, options)
    contentTranslateX.value = withSpring(openMenu ? 30 : 0, options)
  }, [openMenu, openOnboardModal])

  const animatedContentSyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 207 },
      { perspective: 400 },
      { rotateY: `${contentRotateY.value}deg` },
      { translateX: -207 },
      { translateX: contentTranslateX.value }
    ]
  }))
  return (
    <View style={styles.view}>
      <SideBar openMenu={openMenu} />

      <Animated.View style={[styles.Content, animatedContentSyle]}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={{ fontSize: 34, marginTop: 13, marginLeft: 24 }}>
            DCM
          </Text>
        </ScrollView>
      </Animated.View>
      <Header openMenu={openMenu} setIsOpenMenu={setOpenMenu} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: color.colors.shadow,
    justifyContent: 'center'
  },
  Content: {
    flex: 1,
    backgroundColor: color.colors.background,
    borderRadius: 30
  }
})

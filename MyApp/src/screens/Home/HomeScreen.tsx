import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
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
import { userList } from '@/utils/data'
import UserCard from '@/components/UserCard/UserCard'
import FastImage from 'react-native-fast-image'

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

  const renderUserList = ({
    item
  }: {
    item: {
      name: string
      subName: string
      image: string
    }
  }) => {
    return (
      <View>
        <UserCard name={item.name} subName={item.subName} image={item.image} />
      </View>
    )
  }
  return (
    <View style={styles.view}>
      <SideBar openMenu={openMenu} />

      <Animated.View style={[styles.Content, animatedContentSyle]}>
        <ScrollView style={{ flex: 1, paddingTop: 30 }}>
          <FlatList
            data={userList}
            keyExtractor={item => item.name}
            renderItem={renderUserList}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 18, paddingRight: 24 }}
          />
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
  },
  defaultImage: {
    width: '100%',
    height: 200,
    maxHeight: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  }
})

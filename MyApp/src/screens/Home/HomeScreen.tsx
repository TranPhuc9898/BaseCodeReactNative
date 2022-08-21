import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { memo, useEffect, useState } from 'react'
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
import SearchBar from '@/components/SearchBar/SearchBar'

import debounce from 'lodash/debounce'
import hookListUser from '@/components/ListUser/hook/hookListUser'
import ListUser from '@/components/ListUser/ListUser'
import FormInput from '@/components/FormInput/FormInput'

const DELAY_DEBOUNCE_IN_MS = 1000

const handler = (value: string, callback: (newValue: string) => void) => {
  callback(value)
}

const debounceSearchUser = debounce(handler, DELAY_DEBOUNCE_IN_MS)

const HomeScreen = () => {
  const { setSearch, error, users, loading, search } = hookListUser()

  const handleOnChangeText = (value: string) => {
    debounceSearchUser(value, (newValue: string) => {
      setSearch(newValue.trim())
    })
  }

  ///////////
  const contentRotateY = useSharedValue(0)
  const contentTranslateX = useSharedValue(0)
  const contentScale = useSharedValue(0)

  const [openMenu, setOpenMenu] = useState(false)
  const [openOnboardModal, setOpenOnboardModal] = useState(false)
  const [openSignModal, setOpenSignModal] = useState(false)

  useEffect(() => {
    // const options = { damping: 5 }
    // contentRotateY.value = withSpring(openMenu ? -30 : 0, options)
    // contentTranslateX.value = withSpring(openMenu ? 30 : 0, options)
  }, [openMenu, openOnboardModal])

  const animatedContentSyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 207 },
      { perspective: 205 },
      { rotateY: `${contentRotateY.value}deg` },
      { translateX: -207 },
      { translateX: contentTranslateX.value }
    ]
  }))

  return (
    <View style={styles.view}>
      <Animated.View style={[styles.Content, animatedContentSyle]}>
        <ScrollView style={{ paddingTop: 50 }}>
          {loading && (
            <ActivityIndicator
              color={'#EE82EE'}
              size="large"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
              }}
            />
          )}

          <SearchBar
            // onChangeText chỉ nhận 1 cái text
            onChangeText={handleOnChangeText}
            placeHolder="Search..."
          />

          <ListUser products={users} />
        </ScrollView>
      </Animated.View>
      <SideBar openMenu={openMenu} />

      <Header openMenu={openMenu} setIsOpenMenu={setOpenMenu} />
    </View>
  )
}

export default memo(HomeScreen)

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

import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Animated
} from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'

// import lib
import FastImage from 'react-native-fast-image'
// import folder
import color from '@/themes/colors/color'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { addProductToCart, removeProductToCart } from '@/redux/checkOutCard'
import { useSharedValue } from 'react-native-reanimated'

interface IUserCard {
  login: string
  id: number
  url: string
  avatar_url: string
}
const UserCard: React.FC<IUserCard> = ({ login, id, url, avatar_url }) => {
  const [stateHeart, setStateHeart] = useState(false)
  //Redux
  const dispatch = useDispatch()

  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)

  const lastTap = useRef(0)
  const isAnimating = useRef(false)
  const animatedValue = useRef(new Animated.Value(0)).current

  // const pressHeart = () => {
  //   setStateHeart(!stateHeart)
  // }
  useEffect(() => {
    if (stateHeart) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start(() => (isAnimating.current = false))
    } else {
      animatedValue.setValue(0)
      isAnimating.current = false
    }
  }, [animatedValue, stateHeart])

  const heartAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 0.1, 0.8, 1],
          outputRange: [0, 2, 2, 1]
        })
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 0.1, 0.8, 1],
          outputRange: [0, -40, -40, 1]
        })
      }
    ]
  }

  const heartCircleAnimation = {
    opacity: animatedValue
  }
  return (
    <View style={styles.Container}>
      <View style={styles.Gradient}>
        <View style={styles.Content}>
          <View style={styles.Header}>
            <Text numberOfLines={1} style={styles.Name}>
              {login}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 50 }}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com' + '/' + login)}
          >
            <FastImage
              style={styles.defaultImage}
              source={{ uri: avatar_url }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Heart}>
          <TouchableOpacity
            style={styles.heartCircle}
            activeOpacity={1}
            onPress={() => {
              if (stateHeart) {
                dispatch(removeProductToCart(id.toString()))
              } else {
                dispatch(addProductToCart(id.toString()))
              }
              setStateHeart(!stateHeart)
            }}
          >
            {stateHeart && (
              <Animated.Image
                style={[styles.heartImage, heartAnimation]}
                source={require('../../assets/images/heart.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default memo(UserCard)

const styles = StyleSheet.create({
  Container: {
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 10
    },
    backgroundColor: color.colors.purple,
    marginLeft: 20,
    marginBottom: 22,
    borderRadius: 30
  },
  Gradient: {
    width: 260,
    height: 350,
    padding: 30,
    justifyContent: 'space-between'
  },
  Content: {
    width: '100%'
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Name: {
    color: color.colors.background,
    fontSize: 24
  },
  SubName: {
    marginTop: 7
  },
  SubNamee: {
    color: color.colors.pink
  },
  Image: {
    height: 100,
    width: 100
  },
  defaultImage: {
    width: 200,
    height: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderRadius: 30
  },
  url: {
    width: '100%',
    marginTop: 10,
    textAlign: 'center',
    color: '#FF00FF'
  },
  Heart: {
    position: 'absolute',
    bottom: -4,
    right: -3,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heartCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: 'grey',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {
          width: 0.5,
          height: 0.5
        }
      }
    })
  },
  heartImage: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 18,
    height: 18
  }
})

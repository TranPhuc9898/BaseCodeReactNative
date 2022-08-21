import {
  FlatList,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Button,
  ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SearchUsersGithubApi } from '@/services/githubTypes'
import color from '@/themes/colors/color'
import { removeProductToCart } from '@/redux/checkOutCard'
import FormInput from '@/components/FormInput/FormInput'
import { useNavigation } from '@react-navigation/native'
import { addDetailSlice } from '@/redux/DetailSlice'
import { SafeAreaView } from 'react-native-safe-area-context'

const FavorScreen = () => {
  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)
  const [test, setTest] = useState<any>([])

  const navigation = useNavigation()

  const [hello, setHello] = useState('')
  const product = useSelector((state: RootState) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    const data2 = product.productByIds
    console.log(data2, 'dataScreen')
    const result = checkoutCart?.cartGitHubIds.map((item, index) => {
      if (data2[item]) {
        return data2[item]
      }
    })

    setTest(result)
    console.log(result, 'result')
  }, [checkoutCart])
  console.log(test, 'test')

  const renderDetailItems = ({
    item,
    index
  }: {
    item: SearchUsersGithubApi.SearchUsersGithubResponseData
    index: number
  }) => {
    console.log(item, 'aaaaaaaaaaaaaa')
    return (
      <View style={styles.Container}>
        <View style={styles.Gradient}>
          <Button
            color="red"
            title="Delete"
            onPress={() => {
              console.log(item.id, 'caiccgiday')
              // đây là lúc gọi
              dispatch(removeProductToCart(item.id.toString()))
            }}
          />
          <View style={styles.Content}>
            <View style={styles.Header}>
              <Text numberOfLines={1} style={styles.Name}>
                {item?.login}
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailScreen')
                    dispatch(addDetailSlice(item?.id.toString()))
                  }}
                >
                  <Text>Detail Screen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://github.com' + '/' + item.login)
              }
            >
              <Animated.Image
                style={styles.defaultImage}
                source={{ uri: item?.avatar_url }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: 'auto',
          paddingTop: 20,
          paddingLeft: 25,
          paddingRight: 25
        }}
      >
        <FlatList
          data={test}
          renderItem={renderDetailItems}
          keyExtractor={items => items?.id.toString()}
        />
        {/* <View style={{ marginBottom: 50 }}>
        <FormInput
          label="Hello"
          placeholder="Input Hello"
          value={hello}
          onChangeText={text => {
            setHello(text.trim())
          }}
          autoCapitalize="none"
        />
      </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavorScreen

const styles = StyleSheet.create({
  Container: {
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 10
    },
    backgroundColor: color.colors.purple,
    marginBottom: 150,
    marginTop: 35,
    borderRadius: 30,
    alignItems: 'center'
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

import {
  FlatList,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SearchUsersGithubApi } from '@/services/githubTypes'
import color from '@/themes/colors/color'

const FavorScreen = () => {
  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)
  const [test, setTest] = useState<any>([])
  const product = useSelector((state: RootState) => state.product)

  useEffect(() => {
    const data2 = product.productByIds
    console.log(data2, 'data')
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
          <View style={styles.Content}>
            <View style={styles.Header}>
              <Text numberOfLines={1} style={styles.Name}>
                {item?.login}
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: 50 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://github.com' + '/' + item.login)
              }
            >
              <FastImage
                style={styles.defaultImage}
                source={{ uri: item.avatar_url }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={test}
        renderItem={renderDetailItems}
        keyExtractor={items => items?.id.toString()}
      />
    </View>
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
    marginLeft: 20,
    marginBottom: 22,
    marginRight: 20,
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

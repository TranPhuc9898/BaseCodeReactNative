import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SearchUsersGithubApi } from '@/services/githubTypes'

const ScheduleScreen = () => {
  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)
  const [test, setTest] = useState<any>([])
  const product = useSelector((state: RootState) => state.product)

  useEffect(() => {
    const data = product.productByIds
    console.log(data, 'data')
    const result = checkoutCart?.id.map((item, index) => {
      if (data[item]) {
        return data[item]
      }
    })
    setTest(result)
    console.log(result, 'result')
  }, [checkoutCart])

  const renderDetailItems = ({
    item,
    index
  }: {
    item: SearchUsersGithubApi.SearchUsersGithubResponse
    index: number
  }) => {
    return (
      <View style={{ marginTop: 20, backgroundColor: 'red' }}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              width: 800,
              marginLeft: 20,
              color: 'black',
              height: 30
            }}
          >
            {item.items?.[0].id}
          </Text>
          <Text style={{ width: '33%' }}>{item.items?.[0].id}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.container]}>
      <View
        style={{
          paddingTop: 80
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: 400,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              width: '33%',
              marginLeft: 20,
              alignItems: 'center'
            }}
          >
            Name
          </Text>
          <Text style={{ width: '33%' }}>Price</Text>
          <Text style={{ width: '33%' }}>Quantity</Text>
        </View>
        <FlatList
          data={test}
          keyExtractor={items => items.items?.[0].id.toString()}
          renderItem={renderDetailItems}
        />
      </View>
    </View>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  defaultImage: {
    width: '100%',
    height: 200,
    maxHeight: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  container: {
    flex: 1
  }
})

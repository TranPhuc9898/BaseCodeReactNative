import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SearchUsersGithubApi } from '@/services/githubTypes'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import { conditionalExpression } from '@babel/types'

const DetailScreen: React.FC<{}> = () => {
  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)
  const product = useSelector((state: RootState) => state.product)
  const detail = useSelector((state: RootState) => state.detail)
  const [test, setTest] = useState<any>([])
  const dataFavor = product.productByIds
  useEffect(() => {
    console.log(dataFavor, 'dataFavor')
    const result = checkoutCart?.cartGitHubIds.map((item, index) => {
      if (dataFavor[item]) {
        return dataFavor[item]
      }
    })

    setTest(result)
    console.log(result, 'resultdataFavor')
  }, [])
  console.log(test, 'testdataFavor')

  return (
    <SafeAreaView>
      {test.map(
        (
          item: SearchUsersGithubApi.SearchUsersGithubResponseData,
          index: number
        ) => {
          console.log(detail.id, 'vv')
          return (
            <View key={index}>
              {detail?.id == item?.id ? (
                <View>
                  <View>
                    <FastImage
                      source={{ uri: item?.avatar_url }}
                      resizeMode={FastImage.resizeMode.cover}
                      style={{ width: '100%', height: 300 }}
                    />
                  </View>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={{ textAlign: 'center' }}>{item?.login}</Text>
                  </View>
                </View>
              ) : null}
            </View>
          )
        }
      )}
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})

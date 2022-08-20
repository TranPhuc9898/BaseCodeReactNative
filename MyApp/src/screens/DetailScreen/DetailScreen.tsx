import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SearchUsersGithubApi } from '@/services/githubTypes'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'

const DetailScreen: React.FC<{}> = () => {
  const checkoutCart = useSelector((state: RootState) => state.checkOutCart)
  const product = useSelector((state: RootState) => state.product)
  const [test, setTest] = useState<any>([])
  const dataFavor = product.productByIds
  useEffect(() => {
    console.log(dataFavor, 'dataFavor')
    // const result = checkoutCart?.cartGitHubIds.map((item, index) => {
    //   if (dataFavor[item]) {
    //     return dataFavor[item]
    //   }
    // })

    // setTest(result)
    // console.log(result, 'resultdataFavor')
  }, [])
  //   console.log(test, 'testdataFavor')

  return (
    <SafeAreaView>
      {/* {product?.productByIds === test[0]?.id ? (
        <View>
          <View>
            <Text>{test[0]?.login}</Text>
          </View>
        </View>
      ) : null} */}
      <Text>{dataFavor[0]?.login}</Text>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const ScheduleScreen = () => {
  const image = require('../../assets/images/spline.png')
  return (
    <View style={{ width: '50%' }}>
      <FastImage
        style={{ width: 200, height: 200 }}
        source={image}
        resizeMode={FastImage.resizeMode.contain}
      />
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
  }
})

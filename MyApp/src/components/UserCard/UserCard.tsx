import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// import lib
import FastImage from 'react-native-fast-image'
// import folder
import color from '@/themes/colors/color'

interface IUserCard {
  name: string
  subName: string
  link?: string
  image: string
}
const UserCard: React.FC<IUserCard> = ({ name, subName, link, image }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Gradient}>
        <View style={styles.Content}>
          <View style={styles.Header}>
            <Text numberOfLines={2} style={styles.Name}>
              {name}
            </Text>
          </View>
          <View style={styles.SubName}>
            <Text style={styles.SubNamee} numberOfLines={2}>
              {subName}
            </Text>
          </View>
        </View>
        <FastImage
          style={styles.defaultImage}
          source={{ uri: image }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
  Container: {
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 10
    },
    backgroundColor: color.colors.shadow,
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
    color: color.colors.purple,
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
    maxHeight: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderRadius: 30
  }
})

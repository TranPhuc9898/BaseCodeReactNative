import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'

interface Props {
  products: Array<{
    avatar_url: string
    login: string
    url: string
    id: number
  }>
}

const renderUsers = ({
  item
}: {
  item: {
    avatar_url: string
    login: string
    url: string
    id: number
  }
}) => {
  return (
    <View>
      <UserCard
        login={item.login}
        avatar_url={item.avatar_url}
        url={item.url}
        id={item.id}
      />
    </View>
  )
}
const ListUser: React.FC<Props> = ({ products }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderUsers}
        keyExtractor={(item, index) => `${item.toString()}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 18, paddingRight: 24 }}
      />
    </View>
  )
}
export default ListUser

const styles = StyleSheet.create({})

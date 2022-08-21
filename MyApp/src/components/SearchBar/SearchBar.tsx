import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle
} from 'react-native'
import React, { memo, useEffect } from 'react'
//
import { KeyboardEvents } from 'react-native-keyboard-controller'
import Toast from 'react-native-toast-message'
//
import debounce from 'lodash/debounce'
import hookListUser from '../ListUser/hook/hookListUser'

interface ISearchBar {
  placeHolder?: string
  value?: string
  onChangeText?: (text: string) => void
  style?: StyleProp<ViewStyle>
}

const SearchBar: React.FC<ISearchBar> = ({
  placeHolder,
  value,
  onChangeText,
  style
}) => {
  useEffect(() => {}, [])

  return (
    <View style={[styles.searchBar, style]}>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default memo(SearchBar)
//   () {
//   return (
//     <>
//       <EventsListener placeHolder="Search..."  />
//       <View style={{ paddingTop: 50 }}>
//         <Toast topOffset={5} />
//       </View>
//     </>
//   )
// }

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    height: 70,
    marginLeft: 10,
    marginRight: 10
    // borderBottomWidth: 2,
  }
})

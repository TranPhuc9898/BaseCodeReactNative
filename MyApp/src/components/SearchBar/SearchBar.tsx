import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle
} from 'react-native'
import React, { useEffect } from 'react'
//
import { KeyboardEvents } from 'react-native-keyboard-controller'
import Toast from 'react-native-toast-message'

interface ISearchBar {
  placeHolder?: string
  value?: string
  onChangeText?: (text: string) => void
  style?: StyleProp<ViewStyle>
}

const EventsListener: React.FC<ISearchBar> = ({
  placeHolder,
  value,
  onChangeText,
  style
}) => {
  useEffect(() => {
    const show = KeyboardEvents.addListener('keyboardWillShow', e => {
      Toast.show({
        type: 'info',
        text1: '⬆️ ⌨️ Keyboard will show',
        text2: `📲 Height: ${e.height}`
      })
    })
    const shown = KeyboardEvents.addListener('keyboardDidShow', () => {
      Toast.show({
        type: 'success',
        text1: '⌨️ Keyboard is shown',
        text2: '👋'
      })
    })
    const hide = KeyboardEvents.addListener('keyboardWillHide', e => {
      Toast.show({
        type: 'info',
        text1: '⬇️ ⌨️ Keyboard will hide',
        text2: `📲 Height: ${e.height}`
      })
    })
    const hid = KeyboardEvents.addListener('keyboardDidHide', () => {
      Toast.show({
        type: 'error',
        text1: '⌨️ Keyboard is hidden',
        text2: '🤐'
      })
    })

    return () => {
      show.remove()
      shown.remove()
      hide.remove()
      hid.remove()
    }
  }, [])

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

export default function SearchBar() {
  return (
    <>
      <EventsListener placeHolder="Search..." />
      <View style={{ paddingTop: 50 }}>
        <Toast topOffset={5} />
      </View>
    </>
  )
}

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

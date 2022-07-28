import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native'
import { TextInput } from 'react-native-paper'
import React, { FC, ReactNode } from 'react'
import FormText from '../FormText/FormText'

interface IFormInput extends TextInputProps {
  label?: string
  value?: string
  message?: string
  editable?: boolean
  disabled?: boolean
  right?: ReactNode
  style?: StyleProp<ViewStyle>
  secureTextEntry?: boolean
  onChangeText: (text: string) => void
  buttonLike?: boolean
  onPress?: () => void
  mode?: 'outlined' | 'flat' | undefined
}
const FormInput: React.FC<IFormInput> = ({
  label = '',
  value = '',
  message = '',
  editable = true,
  disabled = false,
  secureTextEntry = false,
  right,
  style = {},
  onChangeText = (text: string) => {},
  buttonLike = false,
  onPress = () => {},
  mode = 'outlined'
}) => {
  return (
    <View style={style}>
      <TextInput
        label={label}
        value={value}
        onChangeText={text => onChangeText(text)}
        editable={editable}
        disabled={disabled}
        mode={mode}
        theme={{
          colors: {
            primary: '#2266dd'
          }
        }}
        right={right}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({})

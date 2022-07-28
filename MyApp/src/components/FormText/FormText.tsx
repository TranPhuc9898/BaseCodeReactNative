import React, { FC, ReactNode } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface IProps {
  style?: StyleProp<TextStyle>
  numberOfLines?: number
  visible?: boolean
  children: ReactNode
}

const FormText: FC<IProps> = ({
  style = {},
  visible = true,
  numberOfLines,
  children
}) => {
  return visible ? (
    <Text style={style} numberOfLines={numberOfLines}>
      {children}
    </Text>
  ) : null
}

export default FormText

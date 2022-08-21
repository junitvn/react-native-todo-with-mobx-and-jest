import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

export interface GapProps {
  style?: StyleProp<ViewStyle>
  width?: number
  height?: number
}

export const Gap = observer(function Gap(props: GapProps) {
  const { width, height } = props
  const defaultStyle: ViewStyle = {
    width,
    height,
  }
  const styles = Object.assign({}, CONTAINER, defaultStyle)
  return <View style={styles} />
})

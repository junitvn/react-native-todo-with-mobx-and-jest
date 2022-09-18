import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const CONTAINER: ViewStyle = {
  justifyContent: "flex-start",
  height: 3,
  backgroundColor: "lightgray",
  borderRadius: 3,
}

const PROGRESS: ViewStyle = {
  height: 3,
  borderRadius: 3,
}

export interface ProgressBarProps {
  current: number
  total: number
  color: string
  style?: StyleProp<ViewStyle>
}

export const ProgressBar = observer(function ProgressBar(props: ProgressBarProps) {
  const { style, current, total, color } = props
  const styles = Object.assign({}, CONTAINER, style)
  const progress = (current / total) * 100

  return (
    <View style={styles}>
      <View style={[PROGRESS, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
  )
})

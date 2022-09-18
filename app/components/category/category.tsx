import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../text/text"
import { Category as CategoryModel } from "../../models"
import { ProgressBar } from "../progress-bar/progress-bar"

const CONTAINER: ViewStyle = {
  justifyContent: "space-evenly",
  height: 120,
  width: 200,
  backgroundColor: "white",
  marginRight: spacing[4],
  borderRadius: 20,
  padding: spacing[2],
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 28,
  color: "black",
  fontWeight: "500",
}

const TEXT_ALL_TASKS: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 15,
  color: "gray",
}

const PROGRESS: TextStyle = {
  marginTop: spacing[2],
}

export interface CategoryProps {
  style?: StyleProp<ViewStyle>
  category: CategoryModel
}

export const Category = observer(function Category(props: CategoryProps) {
  const { style, category } = props
  const { title, completedTasks, tasks, color } = category
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <Text style={TEXT_ALL_TASKS}>40 tasks</Text>
      <Text style={TEXT}>{title}</Text>
      <ProgressBar style={PROGRESS} current={5} total={10} color={color} />
    </View>
  )
})

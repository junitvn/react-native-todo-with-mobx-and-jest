import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle, FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Checkbox, HeaderHome, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { toJS } from "mobx"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.offWhite,
  flex: 1,
}

const TEXT_HEADER: TextStyle = {
  color: color.palette.black,
  marginLeft: spacing[4],
  fontSize: 36,
  fontWeight: "bold",
  marginTop: spacing[3],
}
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: 16,
  marginBottom: spacing[2],
  backgroundColor: "white",
  borderRadius: 16,
  paddingLeft: spacing[3],
}
const LIST_TEXT: TextStyle = {
  color: "black",
  fontSize: 20,
}
const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
  flex: 1,
}
const TITLE_SECTION: TextStyle = {
  fontSize: 20,
  color: "gray",
  marginLeft: spacing[4],
  marginVertical: spacing[3],
}
const CHECKBOX: ViewStyle = {
  width: 24,
  height: 24,
  borderRadius: 12,
}
const FILL_CHECKBOX: ViewStyle = {
  width: 18,
  height: 18,
  borderRadius: 9,
  backgroundColor: color.primary,
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    const { taskStore } = useStores()
    console.log("task store", toJS(taskStore.allTask))
    const { allTask } = taskStore

    // Pull in navigation via hook
    // const navigation = useNavigation()
    useEffect(() => {
      // taskStore.saveTask("hello")
    }, [])

    useEffect(() => {
      console.log("all task")
    }, [allTask])

    const username = "Lam"

    const onPressCompleteTask = (id: number) => {
      taskStore.finishTask(id)
      // taskStore.deleteTask(id)
    }

    const renderTaskSection = () => {
      const textDecor = (completed: boolean): TextStyle => ({
        textDecorationLine: completed ? "line-through" : "none",
      })
      return (
        <View style={ROOT}>
          <Text style={TITLE_SECTION}>TODAY'S TASK</Text>
          <FlatList
            contentContainerStyle={FLAT_LIST}
            data={toJS(allTask)}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View style={LIST_CONTAINER}>
                <Checkbox
                  value={item.completed}
                  outlineStyle={CHECKBOX}
                  text={item.title}
                  fillStyle={FILL_CHECKBOX}
                  textStyle={[LIST_TEXT, textDecor(item.completed)]}
                  onToggle={() => {
                    onPressCompleteTask(item.id)
                  }}
                />
              </View>
            )}
          />
        </View>
      )
    }

    return (
      <Screen style={ROOT} preset="fixed">
        <HeaderHome />
        <Text text={`What's up, ${username}!`} style={TEXT_HEADER} />
        {renderTaskSection()}
      </Screen>
    )
  },
)

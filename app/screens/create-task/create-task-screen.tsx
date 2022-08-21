import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
const TITLE_HEADER: TextStyle = {
  fontSize: 20,
  color: "black",
}

const TITLE: TextStyle = {
  fontSize: 18,
  color: "black",
}

const TEXT_INPUT: TextStyle = {
  fontSize: 18,
  color: "black",
  height: 52,
  marginTop: spacing[3],
  borderBottomColor: "gray",
  borderBottomWidth: 1,
}
const INPUT_ROW: ViewStyle = {
  padding: spacing[4],
}

export const CreateTaskScreen: FC<StackScreenProps<NavigatorParamList, "createTask">> = observer(
  function CreateTaskScreen({ navigation }) {
    const [title, setTitle] = useState("")
    const { goBack } = navigation
    const { taskStore } = useStores()
    const save = () => {
      taskStore.saveTask(title)
      goBack()
    }

    return (
      <Screen style={ROOT} preset="fixed">
        <Header
          leftIcon="left"
          onLeftPress={goBack}
          rightIcon="save"
          onRightPress={save}
          headerText="CREATE TASK"
          titleStyle={TITLE_HEADER}
        />
        <View style={INPUT_ROW}>
          <Text style={TITLE}>Title</Text>
          <TextInput
            style={TEXT_INPUT}
            placeholder="Enter title..."
            onChangeText={(text) => setTitle(text)}
          />
        </View>
      </Screen>
    )
  },
)

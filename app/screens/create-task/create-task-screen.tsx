import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Checkbox, Header, Icon, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { textPresets } from "../../components/button/button.presets"
import { isEmpty } from "validate.js"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  justifyContent: "space-between",
  flex: 1,
}
const TITLE_BUTTON_CALENDAR: TextStyle = {
  fontSize: 20,
  color: "gray",
  marginLeft: spacing[4],
}

const BUTTON_TITLE: TextStyle = {
  fontSize: 20,
  color: "white",
}

const TEXT_INPUT: TextStyle = {
  fontSize: 28,
  color: "black",
  height: 52,
  marginLeft: spacing[3],
}
const INPUT_ROW: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: spacing[6],
}

const ROW: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing[5],
}

const ICON_BACK: ImageStyle = {
  width: 18,
  height: 18,
}

const ICON_CONTAINER: ViewStyle = {
  alignSelf: "flex-end",
  marginRight: 30,
  borderWidth: 1,
  borderRadius: 20,
  padding: 10,
  borderColor: "gray",
}

const BUTTON_WITH_BORDER: ViewStyle = {
  borderRadius: 40,
}

const BUTTON_SAVE_CONTAINER: ViewStyle = {
  alignSelf: "flex-end",
  marginRight: 40,
  backgroundColor: "#1E90FF",
  marginBottom: 40,
  paddingHorizontal: 40,
  paddingVertical: 20,
}

const BUTTON_CALENDAR: ViewStyle = {
  borderColor: "gray",
  borderWidth: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 10,
}

const COLOR_PALATE: ViewStyle = {
  width: 25,
  height: 25,
  borderRadius: 25,
  backgroundColor: "blue",
}
const COLOR_PALATE_CONTAINER: ViewStyle = {
  borderRadius: 43,
  borderWidth: 1,
  width: 43,
  height: 43,
  padding: 5,
  justifyContent: "center",
  alignItems: "center",
  borderColor: "gray",
  marginLeft: 20,
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

    const enableSaveButton = !isEmpty(title)

    return (
      <Screen style={ROOT} preset="fixed">
        <TouchableOpacity onPress={goBack} style={ICON_CONTAINER}>
          <Icon icon="close" style={ICON_BACK} />
        </TouchableOpacity>
        <View style={INPUT_ROW}>
          <TextInput
            style={TEXT_INPUT}
            placeholder="Enter new task"
            onChangeText={(text) => setTitle(text)}
          />
          <View style={ROW}>
            <TouchableOpacity style={[BUTTON_CALENDAR, BUTTON_WITH_BORDER]}>
              <Icon icon="calendar" style={ICON_BACK} />
              <Text style={TITLE_BUTTON_CALENDAR}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={COLOR_PALATE_CONTAINER}>
              <View style={COLOR_PALATE} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          disabled={!enableSaveButton}
          onPress={save}
          style={[
            BUTTON_SAVE_CONTAINER,
            BUTTON_WITH_BORDER,
            // eslint-disable-next-line react-native/no-inline-styles, react-native/no-color-literals
            { backgroundColor: enableSaveButton ? "#1E90FF" : "lightgray" },
          ]}
        >
          <Text style={BUTTON_TITLE}>New task</Text>
        </TouchableOpacity>
      </Screen>
    )
  },
)

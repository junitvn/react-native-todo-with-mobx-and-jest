import * as React from "react"
import { ImageStyle, StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Icon } from "../icon/icon"
import { Gap } from "../gap/gap"
import { spacing } from "../../theme"

const MENU_ICON_SIZE = 40
const NOTI_ICON_SIZE = 25
const SEARCH_ICON_SIZE = 23

const CONTAINER: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: 'row'
}


const MENU_ICON_CONTAINER: ImageStyle = {
  width: MENU_ICON_SIZE,
  height: MENU_ICON_SIZE,
  marginLeft: spacing[2]
}

const NOTI_ICON_CONTAINER: ImageStyle = {
  width: NOTI_ICON_SIZE,
  height: NOTI_ICON_SIZE,
}

const SEARCH_ICON_CONTAINER: ImageStyle = {
  width: SEARCH_ICON_SIZE,
  height: SEARCH_ICON_SIZE,
}

const HEADER_RIGHT: ViewStyle = {
  flexDirection: 'row',
  marginRight: spacing[3]
}

export interface HeaderHomeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const HeaderHome = observer(function HeaderHome(props: HeaderHomeProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <Icon icon="menu" style={MENU_ICON_CONTAINER} />
      <View style={HEADER_RIGHT}>
        <Icon icon="search" style={SEARCH_ICON_CONTAINER} />
        <Gap width={16} />
        <Icon icon="noti" style={NOTI_ICON_CONTAINER} />
      </View>
    </View>
  )
})

import React from "react"
import renderer from "react-test-renderer"
import { HeaderHome } from "./header-home"

test("renders correctly", () => {
  const tree = renderer.create(<HeaderHome />).toJSON()
  expect(tree).toMatchSnapshot()
})

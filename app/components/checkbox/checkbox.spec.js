import React from "react"
import renderer from "react-test-renderer"
import { Checkbox } from "./checkbox"

test("renders correctly", () => {
  const tree = renderer.create(<Checkbox />).toJSON()
  expect(tree).toMatchSnapshot()
})

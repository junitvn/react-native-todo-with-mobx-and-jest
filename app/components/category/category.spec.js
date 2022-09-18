import React from "react"
import renderer from "react-test-renderer"
import { Category } from "./category"

test("renders correctly", () => {
  const tree = renderer.create(<Category category={{ title: "Test", color: "gray" }} />).toJSON()
  expect(tree).toMatchSnapshot()
})

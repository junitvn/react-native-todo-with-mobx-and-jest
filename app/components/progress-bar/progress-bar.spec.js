import React from "react"
import renderer from "react-test-renderer"
import { ProgressBar } from "./progress-bar"

test("renders correctly", () => {
  const tree = renderer.create(<ProgressBar />).toJSON()
  expect(tree).toMatchSnapshot()
})

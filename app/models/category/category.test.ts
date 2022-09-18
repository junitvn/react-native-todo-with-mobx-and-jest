import { CategoryModel } from "./category"

test("can be created", () => {
  const instance = CategoryModel.create({
    id: Date.now(),
    tasks: [],
    completedTasks: [],
    title: "Test",
  })

  expect(instance).toBeTruthy()
})

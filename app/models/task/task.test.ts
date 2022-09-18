import { TaskModel } from "./task"

test("can be created", () => {
  const instance = TaskModel.create({
    id: Date.now(),
    title: "Test",
    categoryId: 1,
    completed: false,
    createdAt: Date.now(),
  })

  expect(instance).toBeTruthy()
})

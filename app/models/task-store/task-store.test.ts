import { TaskStoreModel } from "./task-store"

test("can be created", () => {
  const instance = TaskStoreModel.create({})

  expect(instance).toBeTruthy()
})

describe("TaskStore", () => {
  it("creates new todos", () => {
    // const { taskStore } = renderHooks
    // taskStore.saveTask("todo1")
    // taskStore.saveTask("todo2")
    // expect(taskStore.allTask.length).toBe(2)
  })
})

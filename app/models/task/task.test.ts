import { TaskStoreModel } from "../task-store/task-store"
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

describe("TodoStore", () => {
  it("creates new todos", () => {
    const taskStore = TaskStoreModel.create()
    taskStore.saveTask("test1")
    expect(taskStore.allTask[0].title).toBe("test1")
  })
})

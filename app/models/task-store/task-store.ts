import { Task, TaskModel } from "./../task/task"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TaskStoreModel = types
  .model("TaskStore")
  .props({
    allTask: types.optional(types.array(TaskModel), []),
  })
  .actions((self) => ({
    saveTask: (title: string) => {
      const newTask: Task = {
        id: Date.now(),
        title,
        createdAt: Date.now(),
        completed: false,
      }
      self.allTask.push(newTask)
    },
    finishTask: (id: number) => {
      const filteredFinishedTasks = self.allTask.map((item: Task) => {
        const currentStatus = item.completed
        return {
          ...item,
          completed: item.id === id ? !currentStatus : currentStatus,
        }
      })
      self.allTask.replace(filteredFinishedTasks)
    },
    deleteTask: (id: number) => {
      const filteredFinishedTasks = self.allTask.filter((item: Task) => item.id !== id)
      self.allTask.replace(filteredFinishedTasks)
    },
  }))

export interface TaskStore extends Instance<typeof TaskStoreModel> {}
export interface TaskStoreSnapshotOut extends SnapshotOut<typeof TaskStoreModel> {}
export interface TaskStoreSnapshotIn extends SnapshotIn<typeof TaskStoreModel> {}
export const createTaskStoreDefaultModel = () => types.optional(TaskStoreModel, {})

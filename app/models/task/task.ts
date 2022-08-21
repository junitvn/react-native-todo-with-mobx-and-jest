import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TaskModel = types
  .model("Task")
  .props({
    id: types.identifierNumber,
    title: types.string,
    createdAt: types.number,
    completed: types.boolean,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Task extends Instance<typeof TaskModel> {}
export interface TaskSnapshotOut extends SnapshotOut<typeof TaskModel> {}
export interface TaskSnapshotIn extends SnapshotIn<typeof TaskModel> {}
export const createTaskDefaultModel = () => types.optional(TaskModel, {})

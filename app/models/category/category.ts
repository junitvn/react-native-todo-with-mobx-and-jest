import { TaskModel } from "./../task/task"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CategoryModel = types.model("Category").props({
  id: types.identifierNumber,
  title: types.string,
  tasks: types.optional(types.array(TaskModel), []),
  completedTasks: types.optional(types.array(TaskModel), []),
  color: types.maybe(types.string)
})
// eslint-disable-line @typescript-eslint/no-unused-vars

export interface Category extends Instance<typeof CategoryModel> {}
export interface CategorySnapshotOut extends SnapshotOut<typeof CategoryModel> {}
export interface CategorySnapshotIn extends SnapshotIn<typeof CategoryModel> {}
export const createCategoryDefaultModel = () => types.optional(CategoryModel, {})

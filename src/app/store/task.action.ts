import {Action} from '@ngrx/store';
import {Task} from '../models/task';

export enum TaskActionTypes {
  ADD_TASK = '[Task Action] Add Task',
  COMPLETE_TASK = '[Task Action] Complete Task',
  UNCOMPLETED_TASK = '[Task Action] Uncompleted Task',
  DELETE_TASK = '[Task Action] Delete Task',
  GET_TASKS = '[Task Action] Get Tasks',
  GET_TASKS_SUCCESS = '[Task Action] Get Tasks Success',
  GET_TASKS_FAILED = '[Task Action] Get Tasks Failed'
}

export class AddTaskAction implements Action {
  public readonly type: string = TaskActionTypes.ADD_TASK;

  constructor(public payload: Task) {
  }
}

export class CompleteTaskAction implements Action {
  public readonly type: string = TaskActionTypes.COMPLETE_TASK;

  constructor(public payload: { id: string }) {
  }
}

export class UncompletedTaskAction implements Action {
  public readonly type: string = TaskActionTypes.UNCOMPLETED_TASK;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTaskAction implements Action {
  public readonly type: string = TaskActionTypes.DELETE_TASK;

  constructor(public readonly payload: Task) {
  }
}

export class GetTasksAction implements Action {
  public readonly type: string = TaskActionTypes.GET_TASKS;

  constructor(public readonly payload: any = {}) {
  }
}

export class GetTaskSuccessAction implements Action {
  public readonly type: string = TaskActionTypes.GET_TASKS_SUCCESS;

  constructor(public readonly payload: { tasks: Task[] }) {
  }
}

export class GetTaskFailedAction implements Action {
  public readonly type: string = TaskActionTypes.GET_TASKS_FAILED;

  constructor(public readonly payload: { error: any }) {
  }
}

export type TaskActionType =
  | AddTaskAction
  | CompleteTaskAction
  | UncompletedTaskAction
  | DeleteTaskAction
  | GetTasksAction
  | GetTaskSuccessAction
  | GetTaskFailedAction;

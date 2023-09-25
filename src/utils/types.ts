export type Project = {
    id: number,
    title: string,
    tasks?: Task[]
}

export type Task = {
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    deadline: Date,
    completedAt?: Date,
    status: "queue" | "development" | "done",
    file: File,
    priority: number,
    subTasks?: Task[]
}

export type State = {
    projects: Project[],
}

export enum ActionType {
    SET_PROJECTS = 'SET_PROJECTS',
    ADD_PROJECT = 'ADD_PROJECT',
    DELETE_PROJECT = 'DELETE_PROJECT',
    SET_TASKS = 'SET_TASKS',
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    EDIT_TASK = 'EDIT_TASK'
}
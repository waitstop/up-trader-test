import {AnyAction} from "redux";
import {ActionType} from "@/utils/types";
import {loadState} from "@/utils/localStorage";

const initialState  = loadState()

export function projectsReducer(state = initialState?.projects || [], action: AnyAction){
    switch (action.type){
        case ActionType.SET_PROJECTS:
            return action.payload
        case ActionType.ADD_PROJECT:
            return state.concat(action.payload)
        case ActionType.DELETE_PROJECT:
            return state.filter(project => project.id !== action.payload)

        case ActionType.ADD_TASK:
            return state.map(project=>{
                if (project.id !== action.projectId) return project
                return {
                    ...project,
                    tasks: [
                        ...project.tasks?.filter(task=> task.id !== action.task.id) || [],
                        action.task
                    ]
                }
            })

        case ActionType.SET_TASKS:
            return state.map(project=>{
                if (project.id !== action.projectId) return project
                return {...project, tasks: action.tasks}
            })

        case ActionType.EDIT_TASK:
            return state.map(project=>{
                if (project.id !== action.projectId) return project
                return {
                    ...project,
                    tasks: [
                        ...project.tasks?.filter(task=> task.id !== action.task.id) || [], action.task
                    ]
                }
            })
        default: return state
    }
}
import {Project, State} from "@/utils/types";

export function loadState(): State {
    try{
        const projects: Project[] = JSON.parse(localStorage.getItem('projects') || '[]')
        return {projects}
    }
    catch{
        return {projects: []} as State
    }
}

export function saveState(state: State) {
    localStorage.setItem('projects', JSON.stringify(state.projects))
}
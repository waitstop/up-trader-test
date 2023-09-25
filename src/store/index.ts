import {loadState, saveState} from "@/utils/localStorage";
import {combineReducers, createStore} from "redux";
import {projectsReducer} from "@/store/reducers";

const initialState  = loadState() as Object

const rootReducer = combineReducers({
    projects: projectsReducer
})
// noinspection JSDeprecatedSymbols
export const store = createStore(rootReducer, initialState)

store.subscribe(()=>{
    saveState(store.getState())
})
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import './styles.scss'
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {ActionType, State} from "@/utils/types";
import {useDispatch, useSelector} from "react-redux";

const CreateProject = ({setState}: {setState: Dispatch<SetStateAction<boolean>>}) => {
    const dispatch = useDispatch()
    const projects = useSelector((state:State) => state.projects)

    const [inputTitle, setInputTitle] = useState<string>('')
    function createProject(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(!inputTitle.trim()) return
        const newProject = {id: projects.length || 0, title: inputTitle}
        console.log(newProject);
        dispatch({type: ActionType.ADD_PROJECT, payload: newProject})
        setState(false)
    }

    return (
        <div className={"projects__create"}>
            <h1>Create new project</h1>
            <form onSubmit={createProject}>
                <Input value={inputTitle} onChange={e=>setInputTitle(e.target.value)} required label={"Project name"} type="text"/>
                <Button type={"submit"} variant={"outline"}>Create</Button>
            </form>
        </div>
    );
};

export default CreateProject;
import Input from "@/components/ui/Input";
import './styles.scss'
import Button from "@/components/ui/Button";
import {ChangeEvent, FormEvent, useState} from "react";
import {ActionType, State, Task} from "@/utils/types";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const CreateTask = () => {
    const [data, setData] = useState<Task | undefined>()
    const {projectId} = useParams()
    const tasks = useSelector((state: State) => state.projects.find(project => String(project.id) === projectId)?.tasks || [])
    const dispatch = useDispatch()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(data)
        if (!data) return

        dispatch({
            type: ActionType.ADD_TASK,
            projectId: parseInt(projectId || "0"),
            task: data
        })
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setData(prevState => (
            {
                ...prevState,
                [name]: value,
                status: "queue",
                id: tasks.length,
                createdAt: new Date()
            } as Task
        ))
    }

    return (
        <div className={"tasks__create-modal"}>
            <span className={"modal__title"}>Create new task</span>
            <form onSubmit={handleSubmit}>
                <Input name={"title"} onChange={handleInputChange} label={"Title"} type={"text"} required/>
                <Input name={"description"} onChange={handleInputChange} label={"Description"} type={"text"} required/>
                <Input name={"deadline"} onChange={handleInputChange} label={"Deadline"} type={"date"} required/>
                <Input name={"priority"} onChange={handleInputChange} label={"Priority"} type={"number"} required/>
                <Input name={"file"} onChange={handleInputChange} label={"Embedded file"} accept={".png,.jpg,.jpeg"}
                       type={"file"}/>

                <Button type={"submit"} variant={"outline"}>Create</Button>
            </form>
        </div>
    );
};

export default CreateTask;
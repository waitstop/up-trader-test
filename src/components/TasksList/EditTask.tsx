import {ChangeEvent, FC, FormEvent, useState} from "react";
import {State, Task} from "@/utils/types";
import Button from "@/components/ui/Button";
import {useSelector} from "react-redux";
import Input from "@/components/ui/Input";
import {useParams} from "react-router-dom";

const EditTask: FC<Pick<Task, "id">> = ({id}) => {
    const {projectId} = useParams()
    const task: Task | undefined = useSelector((state: State) => state.projects.find(project => String(project.id) === String(projectId))?.tasks?.find(task => String(task.id) === String(id)))
    const [editMode, setEditMode] = useState<boolean>(false)
    const [data, setData] = useState<Task | undefined>(task)

    function saveTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setData(prevState => {
            return{
                ...prevState,
                [name]: value
            } as Task
        })
        setEditMode(true)
    }

    return (
        <div>
            <span className={"modal__title"}>{task?.title}</span>

            <form onSubmit={saveTask}>
                <Input value={data?.title} name={"title"} onChange={handleInputChange} label={"Title"} type={"text"}
                       required/>
                <Input value={data?.description} name={"description"} onChange={handleInputChange} label={"Description"} type={"text"} required/>
                <Input value={data?.deadline.toString()} name={"deadline"} onChange={handleInputChange} label={"Deadline"} type={"date"} required/>
                <Input value={data?.priority} name={"priority"} onChange={handleInputChange} label={"Priority"} type={"number"} required/>
                <Input value={data?.file?.name} name={"files"} onChange={handleInputChange} label={"Embedded file"} accept={".png,.jpg,.jpeg"}
                       type={"file"}/>

                <div className={"modal__actions"}>
                    <Button disabled={!editMode} variant={"outline"} type={"submit"}>Save</Button>
                    <Button onClick={()=> {
                        setData(task)
                        setEditMode(false)
                    }} disabled={!editMode} variant={"destructive"}>Reset</Button>
                </div>

            </form>
        </div>
    );
};

export default EditTask;
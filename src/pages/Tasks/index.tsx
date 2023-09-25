import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, State, Task} from "@/utils/types";
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import TasksList from "@/components/TasksList";
import TaskItem from "@/components/TasksList/TaskItem";
import Button from "@/components/ui/Button";
import {useState} from "react";
import Modal from "@/components/ui/Modal";
import CreateTask from "@/components/TasksList/CreateTask";
import './styles.scss'

const Tasks = () => {
    const {projectId} = useParams()
    const project = useSelector((state: State) => state.projects.find(project => project.id === Number(projectId)))
    const dispatch = useDispatch()
    const tasks: Task[] = project?.tasks || []
    const [isModal, setIsModal] = useState<boolean>(false)

    function handleDragEnd(event: DragEndEvent) {
        const {over, active} = event
        if (!over || !active) return
        dispatch({
            type: ActionType.EDIT_TASK,
            projectId: parseInt(projectId || "0"),
            task: {
                ...tasks.filter(task => task.id.toString() === active.id.toString())[0],
                status: over.id
            },
        })
    }

    return (
        <div className={"tasks"}>
            <h1>Project: {project?.title}</h1>
            <Button variant={"outline"} onClick={() => setIsModal(true)}>Add task</Button>
            <DndContext onDragEnd={handleDragEnd}>
                <div className={"tasks__container"}>
                    <TasksList type={"queue"}>
                        {tasks.map(task => (
                            task.status === "queue" && <TaskItem key={task.id} id={task.id} title={task.title}/>
                        ))}
                    </TasksList>
                    <TasksList type={"development"}>
                        {tasks.map(task => (
                            task.status === "development" && <TaskItem key={task.id} id={task.id} title={task.title}/>
                        ))}
                    </TasksList>
                    <TasksList type={"done"}>
                        {tasks.map(task => (
                            task.status === "done" && <TaskItem key={task.id} id={task.id} title={task.title}/>
                        ))}
                    </TasksList>
                </div>
            </DndContext>
            <Modal state={isModal} setState={setIsModal}>
                <CreateTask/>
            </Modal>
        </div>
    );
};

export default Tasks;
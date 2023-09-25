import {Task} from "@/utils/types";
import {DragOverlay, useDraggable} from "@dnd-kit/core";
import {FC, useState} from "react";
import './styles.scss'
import Button from "@/components/ui/Button";
import EditTask from "@/components/TasksList/EditTask";
import Modal from "@/components/ui/Modal";

const TaskItem: FC<Pick<Task, "id" | "title">> = ({id, title}) => {
    const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
        id: `${id}`,
    })

    const [isModal, setIsModal] = useState<boolean>(false)

    return (
        <>
            <div className={`tasks__item ${isDragging && 'tasks__item-dragging'}`}>
                <span ref={setNodeRef} {...attributes} {...listeners}>
                    {title}
                </span>
                <Button onClick={()=> setIsModal(true)}>&#9776;</Button>
            </div>
            <DragOverlay>
                {isDragging ?
                    <div className={"tasks__item"}>
                        <span>{title}</span>
                        <Button>&#9776;</Button>
                    </div>
                    :null}
            </DragOverlay>
            <Modal className={"tasks__edit-modal"} state={isModal} setState={setIsModal}>
                <EditTask id={id}/>
            </Modal>
        </>
    );
};

export default TaskItem;
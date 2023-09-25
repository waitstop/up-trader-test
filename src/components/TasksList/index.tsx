import {useDroppable} from "@dnd-kit/core";
import {ReactNode} from "react";

type Props = {
    children: ReactNode,
    type: "queue" | "development" | "done"
}

const TasksList = ({children, type}: Props) => {
    const {setNodeRef} = useDroppable({
        id: `${type}`,
    })
    return (
        <div ref={setNodeRef} className={"tasks__list"}>
            <h2>{type[0].toUpperCase() + type.slice(1)}</h2>
            <div>
                {children}
            </div>
        </div>

    );
};

export default TasksList;
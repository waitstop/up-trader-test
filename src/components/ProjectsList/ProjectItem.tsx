import Button from "@/components/ui/Button";
import {useDispatch} from "react-redux";
import {FC} from "react";
import {Project} from "@/utils/types";

const ProjectItem: FC<Project> = ({title, id}) => {
    const dispatch = useDispatch()
    function deleteProject() {
        dispatch({
            type: 'DELETE_PROJECT',
            payload: id
        })
    }

    return (
        <div className={"projects__item"}>
            <a href={`/projects/${id}/tasks`}>{title}</a>
            <Button onClick={deleteProject}>&#10006;</Button>
        </div>
    );
};

export default ProjectItem;
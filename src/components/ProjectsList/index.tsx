import './styles.scss'
import ProjectItem from "@/components/ProjectsList/ProjectItem";
import {State} from "@/utils/types";
import {useSelector} from "react-redux";


const ProjectList = () => {
    const projects = useSelector((state: State) => state.projects)
    return (
        <>
            {projects.length === 0 && <span className={"no-projects-warning"}>No projects found</span>}
            <div className="projects">
                {projects.map(project => (
                    <ProjectItem key={project.id} title={project.title} id={project.id}/>
                ))}
            </div>
        </>

    )
}

export default ProjectList
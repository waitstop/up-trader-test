import React, {useState} from 'react';
import ProjectList from "@/components/ProjectsList";
import CreateProject from "@/components/ProjectsList/CreateProject";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import './styles.scss'


function HomePage() {
    const [isModal, setIsModal] = useState<boolean>(false)
    return (
        <div>
            <h1>My projects</h1>
            <Button className={"create-project-btn"} variant={"outline"} onClick={()=>setIsModal(true)}>New project</Button>
            <Modal state={isModal} setState={setIsModal}>
                <CreateProject setState={setIsModal}/>
            </Modal>
            <ProjectList/>
        </div>
    );
}

export default HomePage;

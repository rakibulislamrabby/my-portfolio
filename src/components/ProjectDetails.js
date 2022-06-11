import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../hooks/useProjects';

const ProjectDetails = () => {
    const [projectsDetails, setProjectsDetails] = useState([]);
    const { projectId } = useParams()
    console.log(`project.json/` + projectId);
    useEffect(() => {
        fetch("project.json")
            .then(res => res.json())
            .then(data => setProjectsDetails(data))
    }, [])
    const [project] = useProject()
    project.map(p => console.log(p))
    // console.log(project);
    return (
        <div>
            <h2 className='font-6xl pt-24 pl-24'>Project Details: {projectsDetails.id}</h2>
            {/* <img src={} alt="" /> */}
        </div>
    );
};

export default ProjectDetails;
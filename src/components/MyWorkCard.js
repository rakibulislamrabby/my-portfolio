import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyWorkCard = ({ project }) => {
    const { id, img, demo, code } = project;
    const navigate = useNavigate();

    const navigatetoDisplayDetails = id => {
        navigate(`/ProjectDetails/${id}`);
    }

    return (
        <div>

        </div>

    );

};

export default MyWorkCard;
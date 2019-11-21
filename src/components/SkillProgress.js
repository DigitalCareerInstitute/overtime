import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const SkillProgress = ({level, label}) => {
    let pathName = '/skill/'+label;

    return (
        <Link to={pathName} >
            <ProgressBar className="my-3" style={{width: "100%"}} variant="info" now={level} label={label}  />
        </Link>
    )
}

export default SkillProgress;
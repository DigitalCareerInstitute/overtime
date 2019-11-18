import React, { Component } from 'react'
import SkillList from './SkillList';
import { SKILLS } from '../Skills';



class SkillDetails extends Component {
    render() {
        const { title, score, unlocks, description, links } = SKILLS["HTML"];
        return (
            <div className="container bg-light">
                <div className="row p-3 justify-content-center">
                    <h1>{title} </h1>
                </div>
                <div className="row">
                    <div className="col p-3 border">
                        {description}
                    </div>
                    <div className="col">
                        <div className="row p-3 border">
                            level-1
                        </div>
                        <div className="row border">
                            <ul>
                                {links.map( item => (
                                    <li className="text-left m-2" ><a href={item} target="_blank">{item}</a> </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row border">
                    <SkillList />
                </div>
            </div>
        )
    }
}


export default SkillDetails;
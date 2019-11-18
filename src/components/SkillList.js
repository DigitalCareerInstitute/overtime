import React, { Component } from 'react'
import  { SKILLS } from '../Skills'; 
import SkillProgress from './SkillProgress';



class SkillList extends Component {
    state = {
        skills: SKILLS
    }
    render() {
        
        const progressbars = () =>{
            let list = [];
            for (var key in this.state.skills) {
                let score = this.state.skills[key].score;
                list.push([key, score])
            }
            return list.map( (item, index) => {
                let pathName = "/skills/"+item[0];
                return (
                    <SkillProgress level={item[1]} label={item[0]} />
                )
            })
            
        }
        

        return (
            <div>
              {progressbars()}
            </div>
        )
        }
}


export default  SkillList;



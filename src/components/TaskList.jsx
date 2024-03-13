import { useState } from "react"
import Addtask from "./Addtask"

const task=[{
    "taskname":"Assignment1",
    "desc":"vanakam"
},{
    "taskname":"Assignment1",
    "desc":"vanakam"
},{
    "taskname":"Assignment1",
    "desc":"vanakam"
}]

export const TaskList =()=>{
    const [list,setlist] = useState(task)

    return (
        <div className="rightside">
                <div className="titlecard">
                    <h1 style={{"marginLeft":"60px","marginTop":"60px"}}> Discrete Mathematics</h1>
                    <img style={{"width":"290px","marginLeft":"600px","marginTop":"-120px"}} src="./src/assets/book1.png"></img>
                </div>
                <div className="plus-logo">
                <a href="#">
                <img className="plus" src="https://cdn-icons-png.flaticon.com/128/6844/6844877.png"></img> 
                </a>
                </div> 
                <div className="tasklist">
            {list.map((t)=>{
                return <Addtask taskname={t.taskname} desc={t.desc} />
            })}
        </div>
        </div>
    )
}
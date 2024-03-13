import { useEffect, useState } from "react";
import "../assets/styles.css"
import { TaskCompo } from "./TaskCompo";
import { Link } from "react-router-dom";
import {dummy} from './temp'
import Join from "./Join";

const Body = () => {
    const[data,setData]=useState([])
    const[tas,setTas]=useState(0)
    const [join,setjoin]=useState(0)
    const [code,setCode]=useState('')
    const fet = async()=>{
        console.log(tas)
        const response = await fetch(`http://localhost:5256/get-class/${dummy.id}/${tas}`)
        const dat = await response.json()
        console.log("-------------------",dat)
        setData(dat.data)
    }
    const joinTask=async()=>{
        const res = await fetch('http://localhost:5256/'+dummy.id+code)
        const data = await res.json()
        confirm.log(data)
    }
    useEffect(()=>{
        fet()
    },[tas])
    return (
        <>
            <div className="body-main">

                <div className="body-first"> 
                    <div className="body-name">
                        Hey Deepak you have <span> 15 </span> task remaining
                    </div>
                    <div style={{"display":"flex","margin-right":"50px"}}>
                        {(join==1)?<Join fun={setCode}/>:<></>}
                        <button onClick={()=>{
                            setjoin(!join);
                            if(join==1){
                                joinTask()
                            }
                        }} style={{"margin-left":"40px","height":"40px","margin-top":"14px"}} className="body-join-button"> Join Task</button>

                    </div>
                </div>

                <div className="body-middle">
                    <div>
                        <button onClick={()=>{setTas(0)}} className="my-task-btn" style={{background:(tas)? "rgb(205, 211, 210)":"rgb(82, 212, 177)"}}> My Task</button>
                    </div>
                    <div>
                        <button onClick={()=>{setTas(1)}} className="create-task-btn" style={{background:(!tas)? "rgb(205, 211, 210)":"rgb(82, 212, 177)"}}> Created Task </button>
                    </div>
                </div>

                <div className="body-third">
                    <table className="dataDa">
                        <thead>
                            <th>Title </th>
                            <th>Total Tasks</th>
                            <th>Participants </th>
                            <th>Description </th>
                        </thead>
                        <tbody>
                            {data.map((e)=>
                                    <TaskCompo id={e._id} title={e.title} desc={e.description} tas={e.tasks.length} mem={e.members.length}/>
                            )}
                        </tbody>

                    </table>
                 </div> 

            </div>
        </>
    )
}

export default Body;

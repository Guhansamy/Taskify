import { useEffect, useState } from "react";
import "../assets/styles.css"
import { TaskCompo } from "./TaskCompo";

const Body = () => {
    const[data,setData]=useState([])
    const fet = async()=>{
        const response = await fetch("http://localhost:5256/get-class")
        const dat = await response.json()
        console.log(dat)
        setData(dat)
    }
    useEffect(()=>{
        fet()
    },[])
    return (
        <>
            <div className="body-main">

                <div className="body-first"> 
                    <div className="body-name">
                        Hey Deepak you have <span> 15 </span> task remaining
                    </div>
                    <div>
                        <button className="body-join-button" > Join Task</button>
                    </div>
                </div>

                <div className="body-middle">
                    <div>
                        <button className="my-task-btn"> My Task</button>
                    </div>
                    <div>
                        <button className="create-task-btn"> Created Task </button>
                    </div>
                </div>

                <div className="body-third">
                    <table>
                        <thead>
                            <th>Title </th>
                            <th>Total Tasks</th>
                            <th>Participants </th>
                            <th>Description </th>
                        </thead>
                        <tbody>
                            {data.map((e)=>{
                                return (<TaskCompo title={e.title} desc={e.description} tas={e.tasks.length} mem={e.members.length}/>)
                            })}
                        </tbody>

                    </table>
                 </div> 

            </div>
        </>
    )
}

export default Body;

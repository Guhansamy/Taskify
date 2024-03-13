import { useEffect, useState } from "react";
import "../assets/styles.css"
import { TaskCompo } from "./TaskCompo";
import { Link } from "react-router-dom";
import {dummy} from './Login'
import Join from "./Join";

const Body = () => {
    const[data,setData]=useState([])
    const[tas,setTas]=useState(0)
    const [join,setjoin]=useState(0)
    const [code,setCode]=useState('')
    console.log(dummy.id)
    const fet = async()=>{
        console.log(tas)
        const response = await fetch(`http://localhost:5256/get-class/${dummy.id}/${tas}`)
        const dat = await response.json()
        console.log("-------------------",dat)
        setData(dat.data)
    }
    const joinTask=async()=>{
        console.log(dummy.id,code)
        const res = await fetch('http://localhost:5256/join-class/'+dummy.id+'/'+code)
        const data = await res.json()
        console.log(data)
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
                <a href="#" ><img className="add-class" src="https://img.freepik.com/free-vector/3d-cartoon-style-clipboard-with-document-icon-realistic-paper-holder-with-contract-agreement-flat-vector-illustration-management-information-assignment-concept_778687-986.jpg?t=st=1710362129~exp=1710365729~hmac=3799c5926e9e8d8b7c3a44003e21dcb9af0c88a546a1e0102458448d1aa778d3&w=740"></img></a>
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

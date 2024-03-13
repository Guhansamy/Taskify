import { Outlet } from "react-router"
import "../assets/deepak.css"
import { CreateForm } from "./CreateForm"
import { TaskList } from "./TaskList"
import { useState } from "react"

const Taskspage=()=>{

    const[logos , setLogos] = useState()
    cosnt[names , setNames] = useState()
    const[clscode , setClsCode] = useState()
    const[membrs , setMembrs] = useState();

    return (
        <>
        <div className="whole">
            <div className="sidepage">
               
                 <div className="top-sidepage">
                    <div className="circle">
                        <div className="side-logo">D</div>
                    </div>
                    <h3 className="borderbox">Deepak</h3>           
                </div>

                <div className="sidebottom">
                    <h4 className="borderbox">Classcode</h4>
                    <h4 className="borderbox">Members - 60</h4>
                    
                </div>
            </div>
                <Outlet/>
              {/* <TaskList/> */}
              {/* <CreateForm/> */}
              
        </div>
        </>
    )
}
export default Taskspage
import { Outlet } from "react-router"
import "../assets/deepak.css"
import { CreateForm } from "./CreateForm"
import { TaskList } from "./TaskList"
import { useEffect, useState } from "react"
import { dummy } from "./temp"
import { useParams } from "react-router-dom"

const Taskspage=()=>{
    const {id} = useParams();
    console.log(id)
    const[clscode , setClsCode] = useState()
    const[membrs , setMembrs] = useState()

    const fet = async () => {
        const url=`http://localhost:5256/get-cls-code/${id}`

        const response = await fetch(url)
        const data = await response.json()
        console.log(data.values," hello")
        setClsCode(data.values)
        setMembrs(data.siz)
    }

    useEffect(() => {fet()},[])
    return (
        <>
        <div className="whole">
            <div className="sidepage">
               
                 <div className="top-sidepage">
                    <div className="circle">
                        <div className="side-logo">{dummy.name.charAt(0)}</div>
                    </div>
                    <h3 className="borderbox">{dummy.name}</h3>           
                </div>

                <div className="sidebottom">
                    <h4 className="borderbox">{clscode}</h4>
                    <h4 className="borderbox">Members - {membrs}</h4>
                    
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
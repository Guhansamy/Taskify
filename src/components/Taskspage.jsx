import "../assets/deepak.css"
import { CreateForm } from "./CreateForm"
import { TaskList } from "./TaskList"

const Taskspage=()=>{
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

              {/* <TaskList/> */}
              <CreateForm/>
        </div>
        </>
    )
}
export default Taskspage
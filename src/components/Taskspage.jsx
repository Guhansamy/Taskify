import Addtask from "./Addtask"
import "../assets/deepak.css"

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

              <div className="rightside">
                
                <div className="titlecard">
                    <h1 style={{"marginLeft":"60px","marginTop":"60px"}}> Discrete Mathematics</h1>
                    <img style={{"width":"290px","marginLeft":"600px","marginTop":"-120px"}} src="./src/assets/book1.png"></img>
                </div>
                
                <div className="tasklist">
                    <Addtask/>
                    <Addtask/>
                    <Addtask/>
                    <Addtask/>
                    <Addtask/>
                    <Addtask/>
                    <Addtask/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Taskspage
import Addtask from "./Addtask"
export const TaskList =()=>{
    return (
        <div className="rightside">
                
                <div className="titlecard">
                    <h1 style={{"position":"absolute","marginLeft":"60px","marginTop":"60px"}}> Discrete Mathematics</h1>
                    <img style={{"position":"absolute","width":"290px","marginLeft":"600px"}} src="./src/assets/book1.png"></img>
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
    )
}
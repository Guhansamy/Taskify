const Addtask=(props)=>{
    return(
        <>            
        <div className="t1">
            <h2 style={{"marginLeft":"5px"}}>{props.taskname}</h2>
            <div style={{"marginLeft":"25px","marginTop":"10px"}}>
            <p>{props.desc}</p>            
            </div>
            <div style={{"marginRight":"50px","marginLeft":"700px","marginBottom":"10px","backgroundColor":"rgb(80, 194, 163)","marginTop":"20px","boxShadow":"0px 0px 5px","textAlign":"center","padding":"5px","borderRadius":"10px"}}>
                <a style={{"textDecoration":"none"}} href="#">Document</a></div>
        </div>
        </>
    )
}

export default Addtask
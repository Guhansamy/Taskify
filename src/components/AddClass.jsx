import "../assets/styles.css"

const Addclass=()=>{
    return (
        <>
        <img className="addclasspic" src="http://localhost:5256/static/pic.jpg"></img>
        <form className="addclassform">
            <div className="addclassform1" >
            <label>
                <h4>Title</h4>
                <input style={{"height":"35px","marginTop":"9px","marginLeft":"120px","width":"190px","borderRadius":"10px","paddingLeft":"5px"}} type="text" placeholder="Enter the title"></input>
            </label>
            <label>
                <h4>Description</h4>
                <input style={{"height":"35px","marginTop":"9px","marginLeft":"27px","width":"190px","borderRadius":"10px","paddingLeft":"5px"}} type="text" placeholder="Enter the Description"></input>
            </label>
            <button className="addclassbtn" style={{"width":"100px","height":"35px","marginLeft":"130px","marginTop":"20px","borderRadius":"10px"}}>Create</button>
            </div>
        </form>
        </>
    )
}

export default Addclass
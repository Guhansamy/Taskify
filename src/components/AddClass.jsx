const Addclass=()=>{
    return (
        <>
        <form className="addclassform">
            <div className="addclassform1" >
            <label>
                <h1>Class Name</h1>
                <input style={{"height":"35px","marginTop":"9px","marginLeft":"12px"}} type="text"></input>
            </label>
            <label>
                <h1>Description</h1>
                <input style={{"height":"35px","marginTop":"9px","marginLeft":"14px"}} type="text"></input>
            </label>
            <button style={{"width":"100px","height":"35px","marginLeft":"130px","marginTop":"15px"}}>Create</button>
            </div>
        </form>
        </>
    )
}

export default Addclass
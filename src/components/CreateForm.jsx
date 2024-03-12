import "../assets/dharun.css"

export const CreateForm = ()=>{
    const style = {
        container:{
            display:'flex',
            height:'100%'
        },
        leftContainer:{
            width:"25%",
            borderRight:'1px solid black',
            padding:'9% 0px',
            height:'100%'
        },
        rightContainer:{
            width:'75%',
            height:'100%',
            padding:'0% 0px'
        },
        profileContainer:{
            height:'175px',
            width:'175px',
            border:'2px solid black',
            borderRadius:'50%',
            background:'red',
            margin:'10% auto'
        },
        inpContainer:{
            display:'flex',
            flexDirection:'column'   
        },
        btn:{
            border:'1px solid grey',
            borderRadius:'15%',
            padding:'5px 25px',
            margin:'0px 25px',
            background:'green',
            color:'white'
        },
        inp:{
            height:'45px',
            width:'300px',
            border:'0px',
            borderBottom:'2px solid silver',
            fontSize:'20px',
            padding:'5px'
        },
        txtInp:{
            height:'125px',
            width:'300px',
            border:'0px',
            borderBottom:'2px solid silver',
            fontSize:'20px',
            padding:'5px'
        },
        fileInp:{
            height:'45px',
            width:'300px',
            border:'0px',
        }
    }
    return (
        <div style={style.container}>
            <div style={style.leftContainer}>
                <div style={style.profileContainer}>

                </div>
                <h2 style={{textAlign:"center",margin:'0px 75px', borderBottom:'1px solid silver'}}>Deepak</h2>                
            </div>

            <div style={style.rightContainer}>
                <div style={style.inpContainer}>
                    <table className="inp-table">
                        <tr>
                            <td> <h1>Title</h1></td>
                            <td><input style={style.inp} type="text" id="title" /></td>
                        </tr>
                        <tr>
                            <td><h1>Description</h1></td>
                            <td><textarea style={style.txtInp} name="" id="" cols="30" rows="10"></textarea></td>
                        </tr>
                        <tr>
                            <td><h1>Upload Files</h1></td>
                            <td><input style={style.fileInp} type="file" name="" id="" /></td>
                        </tr>
                    </table>
                    <div style={{alignSelf:'flex-end'}}>
                        <a href=""><h1 style={style.btn}>Submit</h1></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
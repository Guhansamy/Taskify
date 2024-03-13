export const TaskCompo = (props)=>{
    console.log(props)
    return (
        <>
            <tr>
                <td className="dataDa"> {props.title} </td>
                <td className="dataDa"> {props.tas} </td>
                <td className="dataDa"> {props.mem} </td>
                <td className="dataDa"> {props.desc} </td> 
            </tr>
        </>
    )
}

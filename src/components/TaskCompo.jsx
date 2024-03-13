export const TaskCompo = (props)=>{
    console.log(props)
    return (
        <>
            <tr>
                <td> {props.title} </td>
                <td> {props.tas} </td>
                <td> {props.mem} </td>
                <td> {props.desc} </td> 
            </tr>
        </>
    )
}

import "../assets/styles.css"

const Body = () => {
    return (
        <>
            <div className="body-main">

                <div className="body-first"> 
                    <div className="body-name">
                        Hey Deepak you have <span> 15 </span> task remaining
                    </div>
                    <div>
                        <button className="body-join-button" > Join Task</button>
                    </div>
                </div>

                <div className="body-middle">
                    <div>
                        <button className="my-task-btn"> My Task</button>
                    </div>
                    <div>
                        <button className="create-task-btn"> Created Task </button>
                    </div>
                </div>

                <div className="body-third">
                    <table>
                        <thead>
                            <th>Title </th>
                            <th>Status </th>
                            <th>Task </th>
                            <th>Participants </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Deepa </td>
                                <td> <button> Completed </button> </td>
                                <td> 5 </td>
                                <td> 32 </td>
                            </tr>

                            <tr>
                                <td> Deepa </td>
                                <td> <button> Completed </button> </td>
                                <td> 5 </td>
                                <td> 32 </td>
                            </tr>

                            <tr>
                                <td> Deepa </td>
                                <td> <button> Completed </button> </td>
                                <td> 5 </td>
                                <td> 32 </td>
                            </tr>

                        </tbody>

                    </table>
                 </div> 

            </div>
        </>
    )
}

export default Body;

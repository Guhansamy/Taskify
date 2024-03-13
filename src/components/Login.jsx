import { useEffect, useState } from 'react'
import '../assets/login.css'

const Login=()=>{
    // const [logname,setlogname]=useState(null)
    // const [logpass,setlogpass]=useState(null)

    // const username=document.getElementById('name').value
    // const password=document.getElementById('pass').value

    const loginclick=()=>{
        // setlogname(username)
        // setlogpass(logpass)
    }

    // useEffect(()=>{
    //     fetch('')
    // },[logname,logpass])

    return (
        <>
        <div className='login'>
            <div className='c1'></div>
            <h1 style={{"textAlign":"center","marginTop":"-100px"}}>Welcome Folks!!!</h1>
        <div className="loginouter">
            <div className='holder'>
                <h2 style={{"marginBottom":"10px"}}>Username</h2>
                <input id='name' className='input' type='text' placeholder='Username'></input>

                <h2 style={{"marginBottom":"10px"}}>Password</h2>
                <input id='pass' className='input' type='text' placeholder='Password'></input>

                <div>
                <button onClick={loginclick} className='btn'><h4>Login</h4></button>
                <p>Don't have an account? 
                <a style={{"marginLeft":"20px","textDecoration":"none","margin":"0"}} href='#'> Create one</a></p>
                </div>
            </div>
            <div className='full'>
                <img src='/src/assets/boy1.png'></img>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login
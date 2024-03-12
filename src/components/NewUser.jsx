import '../assets/signstyles.css';

const NewUser = () => {
    return ( 
        <form className="form">
        <p className="title">Register</p>
        <p className="message">Signup now.</p>
        {/* <div className="flex"> */}
          {/* <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Firstname</span>
          </label> */}
  
          {/* <label>
            <input className="inputs" type="text" placeholder="" required="" />
            <span>Lastname</span>
          </label> */}

            {/* <label>
                <input className="inputs" type="text" placeholder="" required="" />
                <span>UserName</span>
            </label> */}
        {/* </div> */}
        <label>
                <input className="input" type="text" placeholder="" required="" />
                <span>UserName</span>
        </label>
        <label>
          <input className="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>
  
        <label>
          <input className="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>
  
        <label>
          <input className="input" type="password" placeholder="" required="" />
          <span>Confirm password</span>
        </label>
        
        <button className="submit">Submit</button>
        
        <p className="signin">
          Already have an account? <a href="#">Login in</a>
        </p>
      </form>
    )
}

export default NewUser


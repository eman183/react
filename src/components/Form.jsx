/**@formate */
import React, { useState } from 'react'

const Form=()=>
{
  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState("");

  const[password,setPassword]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    if(e.target.value.length<3){
     setEmailError("must be more than 3 charachters")
    }
    else{
      setEmailError("")

    }
  };
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    if(e.target.value.length<3){
      setPasswordError("must be more than 3 charachters")
    }
     else{
       setPasswordError("")
 
     }
   };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!passwordError && !emailError){
      console.log({email,password})
    }
  };

  return(


  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
         <form noValidate onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{handleEmail(e)}} />
             
              <div id="emailHelp" className="form-text">{emailError}</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"value={password} onChange={(e)=>{handlePassword(e)}}/>
              <div id="passwordHelp" className="form-text">{passwordError}</div>
            </div>
          
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
 </div>
   </div>
      </div>
  )

}
export default Form;
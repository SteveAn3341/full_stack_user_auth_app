import { useState , useEffect} from "react"

import {signUp} from "./utilities"


export const SignUp =()=> {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")




  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await signUp(name, email, password);
      if (success) {
        console.log('Sign up success');
      } else {
        console.log('Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    // Reset form fields after submission attempt
    setName("");
    setEmail("");
    setPassword("");
  };



  return(
    <form onSubmit = {handleSubmit}   style ={{display:'flex', flexDirection:'column'}}>
      <h3>Sign Up</h3>
      <input placeholder ='name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input placeholder ='email'  value = {email} onChange={(e)=> setEmail(e.target.value)}/>
      <input placeholder ='password' type='password' value = {password} onChange={(e)=>setPassword(e.target.value)} />
      <button type='submit' value='signUp'>Sign Up</button>


    </form>


  )
}
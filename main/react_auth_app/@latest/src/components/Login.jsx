
import { useState } from "react"

import {Loginfunction} from "./utilities"





export const Login = ()=>{

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")





 
  return (
    <form onSubmit={(e)=>{e.preventDefault() ,Loginfunction(email,password) ,setEmail(""), setPassword("")}} >

      <h3>Log in</h3>
      <input placeholder ='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input placeholder = 'password' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <input type ='submit' value ='Log in' />

    </form>
     
  )
}
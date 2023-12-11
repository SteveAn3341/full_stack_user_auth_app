import {SignUp} from "./components/SignUp"
import {Login} from "./components/Login"
import { currUser,logOut } from "./components/utilities"
import {useEffect, useState} from "react"
import { getToken } from "./components/csrfToken"
import {Nav} from "./components/nav"
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  
  const [name,setName] = useState(null)
  getToken()
  useEffect(() => {
    const getCurrUser = async () =>{
      const userData = await currUser();
      if (userData && userData.user) {
        setName(userData.user.name); // Store just the user's name
      }

    };
    getCurrUser()
  },[]);


  useEffect(() => {
    console.log(name); // This will log the updated state when 'user' changes
  }, [name]);


  
  return (
    <Router>
    <div className = 'App'>


      <button onClick={()=>{logOut(setName)}}>LOG OUT</button>

      <h1>Hello  {name} </h1>
      <Nav/>
      <Routes>
      <Route path="/signup/" element={<SignUp />} />
      
      <Route path="/login" element={<Login />} />
    
      </Routes>
      <SignUp />
      <Login />

    </div>
    </Router>
    
  )
}

export default App





















    


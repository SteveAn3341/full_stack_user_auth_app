import axios from "axios";


export const signUp = async(name,email,password)=>{
  const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
  const response = await axios.post(`/signup/`   , {
    'name':name,
    'email':email,
    'password':password
  }, {
    headers: {
      'X-CSRFToken': csrfToken
    }
    
  })
  console.log(response)
  console.log(response.data.success)

  return response.data.success
}



export const Loginfunction = async (email, password) => {
  const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
  const response = await axios.post(`/login/`, {
    email: email,
    password: password
  }, {
    headers: {
      'X-CSRFToken': csrfToken
    }
  });

  console.log(response);
  console.log(response.data.success);
  window.location.reload()

  return response.data.Loginfunction;
};





export const currUser = async () =>{

  const response = await axios.get(`/curr_user/`)
  console.log(response.data)
  return response.data
}



export const  logOut = async (setName) =>{
  const response = await axios.post(`/logout/`)
  setName(null)
  console.log(response.data.logout)
  return response.data.logout
}
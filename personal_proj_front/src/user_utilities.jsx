import axios from 'axios';
import { redirect } from 'react-router-dom';


// Use that baseURL to create the following:
export const api = axios.create ({ 
  baseURL: "/api/v1/",
//   withCredentials:true
})

// make an interceptor that can run before or after an api call
// namely, one that will run immediately before very request the client sends.


api.interceptors.request.use((config)=>{
   const token = localStorage.getItem("token");
   if (token){
         config.headers.Authorization = `Token ${token}`
        }
        return config
 })


// Create an error message


const errorMessage = (error) => {
  const data = error.response?.data;
  if (!data) return "Something's gone wrong!";
  return typeof data === "string" ? data : JSON.stringify(data);

  }


// Register and Login Features


// most of my errors on the front end come back to this post - specifically line 41
export const userAuth = async (email, password, signup)=> {
  try{const response = await api.post(
    signup ? "users/signup/" : "users/login/",
    {
      email,
      password
    }
  );
  const { email: userErmail, token} = response.data
  localStorage.setItem("token", token)
  return userEmail
}catch (error){
  alert(errorMessage(error))
  return null;
}
  
}


// export const userAuth = async (email, password, signup)=>{
//  try{
//      const response = await api.post(
//       signup ? "users/signup/" : "users/login/",
//         {
//         email,
//         password
//         }
//      );
//  //    return response.data.email
//      const {email: userEmail, token} = response.data
//      localStorage.setItem("token", token);
//      return userEmail

//      }catch (error){
//       alert(errorMessage(error));
//       return null;
//    }
//  }



// user logout. 

export const userLogout = async () => {
  try {
    await api.post("users/logout/")
  }catch(error){
    console.error("Logout request has failed", error);
}
 localStorage.removeItem("token");
 return null;
}


// confirm the user

export const userConfirmation = async () => {
     const token = localStorage.getItem("token");
     if(!token){return null}
     try{
         const response = await api.get("users/");
         return response.data.email;
     
    }catch(error){
      localStorage.removeItem("token");
      console.log(error)
      return null;
    }
}

// block a route to bounce the login page, if the user has no token
// P.S. renaming requireLogin to mustLogin

export const mustLogin = () =>{
  // const email = await userConfirmation()
  // if (!email) throw redirect("/");
  //   return null;
  
 if (!localStorage.getItem("token")) throw redirect("/");
 return null;
}


// if a user is logged in, they don't need to be on login page


export const redirectIfLoggedIn =  () =>{
  // const email = await userConfirmation()
  // return email ? redirect("/home") : null;
   return localStorage.getItem("token") ? redirect("/home") : null;
 
}

export const homeLoader =  ()=>{
  mustLogin()
  return getNotes()
}


export const getNotes = async()=>{
  try{
    const response = await api.get('notes/');
    return response.data
  }catch (error){
    console.error(errorMessage(error));
    return []
  }
}


export const createNote = async (noteObj)=>{
  try{
    const response = await api.post('notes/', noteObj);
    return response.data;
  }catch(error){
    alert(errorMessage(error));
    return null;
  }
}


export const updateNote = async (noteObj)=>{
  try{
    const response = await api.put(`notes/${noteObj.id}/`, noteObj);
    return response.data;
  }catch(error){
    alert(errorMessage(error));
    return null;
  }
}


export const deleteNote = async (noteId) =>{
  try{
    await api.delete(`notes/${noteId}/`);
    return true;
  }catch(error){
    alert(errorMessage(error));
    return false;
    
  }
}

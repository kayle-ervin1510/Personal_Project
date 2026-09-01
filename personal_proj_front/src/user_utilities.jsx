import axios from 'axios';
import { redirect } from 'react-router-dom';


// Use that baseURL to create the following:
export const api = axios.create ({ 
  baseURL: "/api/v1/",
  withCredentials:true
})

const refreshAccessToken=() => {

  return axios.post("/api/v1/users/refresh/", {}, {withCredentials:true})
}

// new interceptor!

api.interceptors.response.use(
  
  (response)=>response,
  
  async (error) => {
    const originalRequest = error.config;
    
    const isRefreshCall = originalRequest?.url?.includes("users/refresh/")
    
    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshCall){
      originalRequest._retry = true
      try {
        await refreshAccessToken();
        return api(originalRequest)
      }catch (refreshError){
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

const errorMessage = (error) => {
  const data = error.response?.data;
  if (!data) return "Something's gone wrong!";
  return typeof data === "string" ? data : JSON.stringify(data);

  }


// Register and Login Features


// most of my errors on the front end come back to this post - specifically line 41
export const userAuth = async (email, password, create)=> {
  try{
    const response = await api.post(
    create ? "users/create/" : "users/login/",
    {
      email,
      password
    }
  );

  return response.data.email
}catch (error){
  alert(errorMessage(error))
  return null;
}
  
}




// user logout. 

export const userLogout = async () => {
  try {
    await api.post("users/logout/")
  }catch(error){
    console.error("Logout request has failed", error);
}

 return null;
}


// confirm the user

export const userConfirmation = async () => {
     try{
         const response = await api.get("users/");
         return response.data.email;
     
    }catch(error){

      return null;
    }
}

// block a route to bounce the login page, if the user has no token
// P.S. renaming requireLogin to mustLogin

export const mustLogin = async () =>{
  const email = await userConfirmation()
  if (!email) throw redirect("/");
    return null;
  

}


// if a user is logged in, they don't need to be on login page


export const redirectIfLoggedIn = async () =>{
  const email = await userConfirmation()
  return email ? redirect("/home") : null;
 
}

// notes

export const homeLoader = async ()=>{
  await mustLogin()
  return getNotes()
  
}


export const getNotes = async ()=>{
  try{
    const response = await api.get("notes/");
    return response.data
  }catch (error){
    console.error(errorMessage(error));
    return []
  }
}


export const createNote = async (noteObj)=>{
  try{
    const response = await api.post("notes/", noteObj);
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

// cats

export const listLoader = async ()=>{
  await mustLogin()
  return getCats()
}

export const getCats = async () =>{
  try{
    const response = await api.get("cats/");
    return response.data
  }catch(error){
    console.error(errorMessage(error));
    return []
  }
}
// I think this would be create a new list, which I can add cats to
export const createCat = async (catObj) => {
  try{
    const response = await api.post("cats/", catObj);
    return response.data;
  }catch(error) {
    alert(errorMessage(error));
    return null;
  }
}
// this would be updating the list
export const updateCat = async (catObj) => {
  try{
    const response = await api.put(`cats/${catObj.id}/`, catObj);
    return response.data;
  }catch(error){
    alert(errorMessage(error));
  return null;
  }
}

export const deleteCat = async (catId) => {
  try{
    await api.delete(`cats/${catId}/`);
    return true;
  }catch(error){
    alert(errorMessage(error));
    return false;
  }
}
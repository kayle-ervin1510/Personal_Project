// import axios from "axios"
// import { redirect } from 'react-router-dom';


// export const api = axios.create({
//     baseURL: "/api/v1/",
//     withCredentials:True
// })

// const refreshAccessToken=() => {
//     return axios.post("/api/v1/users/refresh", {}, {withCredentials:True})
// }


// // -- cats

// const errorMessage = (error) => {
//   const data = error.response?.data;
//   if (!data) return "Something's gone wrong!";
//   return typeof data === "string" ? data : JSON.stringify(data);

//   }


// export const getAllCats = async () => {
//   let response = await axios.get(
//     "http://localhost:8000/api/v1/cats"
//   )
//   console.log(response.data)
// }

// export const getACat = async (cat_id) => {
//   let response = await axios.get(
//     `http://localhost:8000/api/v1/cats/${cat_id}/`
//   )
//   console.log(response.data)
// }

// export const deleteCat = async(cat_id) => {
//     let response = await axios.delete(
//         `http://localhost:8000/api/v1/cats/${cat_id}/`
//     )
//     console.log(response.data)
//     console.log(response.status)
// }



// export const addCat = async (catId) => {
//     try{
//         await api.add(`cats/${catId}/`);
//         return true;
//     }catch (error){
//         alert(errorMessage(error));
//         return false;
//     }
// }


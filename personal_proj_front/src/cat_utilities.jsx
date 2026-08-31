// import axios from 'axios';
// import { redirect } from 'react-router-dom';
// import { mustLogin } from './user_utilities';


// export const api = axios.create({
//     baseURL: "/api/v1/",
//     // withCredentials:true
// })

// // const refreshAccessToken=() => {
// //     return axios.post("/api/v1/users/refresh", {}, {withcredentials:true})
// // }

// export const homeLoader = async () => {
//     await mustLogin()
//     return getCats()
// }

// export const getCats = async () => {
//     try{
//         const response = await api.get("cats/");
//         return response.data
//     }catch(error){
//         console.error(errorMessage(error));
//         return []
//     }
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

// export const deleteCat = async (catId) => {
//     try{
//         await api.delete(`cats/${catId}/`);
//         return true;
//     }catch(error){
//         alert(errorMessage(error));
//         return false;
//     }
// }
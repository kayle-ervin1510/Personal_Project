import axios from "axios"


// -- cats

export const getAllCats = async () => {
  let response = await axios.get(
    "http://localhost:8000/api/v1/cats"
  )
  console.log(response.data)
}

export const getACat = async (cat_id) => {
  let response = await axios.get(
    `http://localhost:8000/api/v1/cats/${cat_id}/`
  )
  console.log(response.data)
}

export const deleteCat = async(cat_id) => {
    let response = await axios.delete(
        `http://localhost:8000/api/v1/cats/${cat_id}/`
    )
    console.log(response.data)
    console.log(response.status)
}



export const addCat = async (catId) => {
    try{
        await api.add(`cats/${catId}/`);
        return true;
    }catch (error){
        alert(errorMessage(error));
        return false;
    }
}

// export const deleteCat = async (catId) => {
//     try{
//         await api.delete(`cats/${catId}/`);
//         return true;
//     }catch(error){
//         alert(errorMessage(error));
//         return false;
//     }
// }
import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate, useParams, useOutletContext} from 'react-router-dom';

export default function Search() {
    const [httpCatId, setHttpCatId] = useState("");
    const[team, setTeam] = useState([]);
    const navigate = useNavigate();
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!httpCatId) return
        navigate(`/cat/${httpCatId}`);
        setHttpCatId("");
    }
    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCatId={setHttpCatId}
                httpCatId={httpCatId}
            />
            <Container  team={team}/>
        </>
    )
}

// BELOW IS SOME CODE THAT DOESN'T LET ME SEARCH
// BUT STILL HELPFUL: saved to extra_branch

    // const [httpCatId, setHttpCatId] = useState("");
    
    // const [team] = useState([]);
    // const navigate = useNavigate();
    // const {id} = useParams();

    // const addCatData = (data)=>{
    //     setTeam([...team, data])
    // }

    // const rmData = (id)=>{
    //     setTeam(team.filter((httpCat)=>httpCat.id!==id))
    // }
    // const getCatData = async ()=> {
    //     const requestURL = `https://http.cat/${httpCatId}`
    //     try{
    //         let response = requestURL
    //         console.log(response)
    //         addCatData(response.data)
    //     }catch(err){
    //         console.log(err)
    //         alert("Cat does not exist")
    //     }finally{
    //         console.log("That be all")
    //     }
    // }

    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     getCatData()
    //     setHttpCatId("");
    // }
import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate, useParams, useOutletContext} from 'react-router-dom';

export default function Search() {
    const [httpCatId, setHttpCatId] = useState("");
    // const {team, setTeam} = useOutletContext();
    const [team] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
 // from here   
    const addCatData = (data)=>{
        setTeam([...team, data])
    }

    const rmData = (id)=>{
        setTeam(team.filter((httpCat)=>httpCat.id!==id))
    }
    const getCatData = async ()=> {
        const requestURL = `https://http.cat/${httpCatId}`
        try{
            let response = requestURL
            console.log(response)
            addCatData(response.data)
        }catch(err){
            console.log(err)
            alert("Cat does not exist")
        }finally{
            console.log("That be all")
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getCatData()
        // if(!httpCatId) return

        // navigate(`/cat/${httpCatId}`);
        setHttpCatId("");
    }
// to here
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

// took team={team} out of <Container />
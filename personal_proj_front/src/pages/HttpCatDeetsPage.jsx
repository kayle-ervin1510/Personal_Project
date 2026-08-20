import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import CatCard from '../components/Search/CatCard';

export default function HttpCatDeetsPage() {

    const [httpCat, setHttpCat] = useState(null);
    // const [errorMessage, setErrorMessage] = useState("");
    // const {id} = useParams();
    const {team, addHttpCat, removeHttpCat, hasHttpCat} = useOutletContext();
    const [errorMessage, setErrorMessage] = useState("");
    const isCaught = httpCat ? hasHttpCat(HttpCatDeetsPage.id): false;
    const canCatch = httpCat ? !isCaught && team.length < 10 : false;
   
    useEffect(() => {
        const lookupId = id?.charAt(0) + id?.slice(1) || "";
        
    


    const fetchHttpCat = async () => {
        try{
            const response = await axios.get(
                `https://http.cat/${lookupId}`
            )
            setHttpCat(response.data);
            setErrorMessage("");
        }catch (error) {
            setHttpCat(null);
            setErrorMessage(`No such HTTP Cat with id of '${lookupId}' exists.`);
        }
    };
    fetchHttpCat();
}, [id]);



    if (errorMessage) {
        return <MissingPage message={errorMessage}/>
    }
    if (!httpCat) {
        return <MissingPage message={errorMessage}/>
    }
   
    return (
        <div className="cat-ard">
            <h2>HTTP Status {httpCat}</h2>
            <img src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             />

            <button 
            className="cat-action"
            disabled={!canCatch && !isCaught}
            onClick={() => (isCaught ? removeHttpCat(httpCat.id) : addHttpCat(httpCat))}
            >
                {isCaught ? "Remove Cat" : "Add Cat"}
            </button>
        </div>
    );
}


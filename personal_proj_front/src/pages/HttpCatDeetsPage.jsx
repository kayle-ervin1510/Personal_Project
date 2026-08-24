import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';

export default function HttpCatDeetsPage() {

    
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const isCaught = httpCat ? hasHttpCat(httpCat.id): false;
    const canCatch = httpCat ? !isCaught && team.length < 10 : false;
    const {hasHttpCat, team, releaseCat, catchHttpCat} = useOutletContext();
    const {id} = useParams();
 
    const fetchHttpCat = async () => {
        try {
            const response = `https://http.cat${httpCat}`
            setHttpCat(response);
            setErrorMessage("");
        }catch (error) {
            setHttpCat(null);
            setErrorMessage(`No such cat with http code '${httpCat}' exists.`)
        }
        fetchHttpCat();
    }
   


    // if (errorMessage) {
    //     return <MissingPage message={errorMessage}/>
    // }
    // if (!httpCat) {
    //     return <MissingPage message={errorMessage}/>
    // }
  
    return (
        <div className="cat-card">
            <h2>HTTP Status {`${httpCat}`}</h2>
            {/* <img 
            src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             />
           
            <button 
            className="cat-action"
            disabled={canCatch && !isCaught}
            onClick={() => (isCaught ? releaseCat(httpCat.id) : catchHttpCat(httpCat))}
            >
                {isCaught ? "Remove Cat" : "Add Cat"}
            </button> */}
            <CatCard/>
        </div>
    );
}


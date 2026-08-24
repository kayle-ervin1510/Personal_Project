import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';

export default function HttpCatDeetsPage() {

    
    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    
    // const {hasHttpCat, team, releaseCat, catchCat} = useOutletContext();
    const {id} = useParams();
    
    // hasHttpCat is listed as not being a function
    // const isCaught = httpCat ? hasHttpCat(httpCat.id): false;
    // const canCatch = httpCat ? !isCaught && team.length < 10 : false;

    useEffect ( () => {
        const lookupId = id?.charAt(0) + id?.slice(1) || ""

    const fetchHttpCat = async () => {
        try {
            const response = `https://http.cat/${lookupId}`
            setHttpCat(response);
            setErrorMessage("");
        }catch (error) {
            setHttpCat(null);
            setErrorMessage(`No such cat with http code '${httpCat}' exists.`)
        }
        }
        fetchHttpCat();
   }, [id])


    if (errorMessage) {
        return <MissingPage message={errorMessage}/>
    }
    if (!httpCat) {
        return <MissingPage message={errorMessage}/>
    }
    // const cardStyle = {
    //     backgroundColor: "#0000"
    // }
  
    return (
        <div style = {{width:"14rem"}}>
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
            {/* <button 
            className="cat-action"
            disabled={!canCatch && !isCaught}
            onClick={() => (isCaught ? releaseCat(httpCat.id): catchHttpCat(httpCat))}
            >
                {isCaught ? "Let go" : "Catch"}
            </button> */}
        </div>
    );
}


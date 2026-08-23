import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';

export default function HttpCatDeetsPage() {

    // I want httpCat to be equal to what I type in
    // Like, I want it to show up as the status code
    // not show up as null, or undefined.
    const [httpCat] = useState("");
// const [httpCat] = useState(null) originally


    const { hasHttpCat} = useOutletContext();
    // const [errorMessage, setErrorMessage] = useState("");
    // const {id} = useParams();
 
    const [team] = useState(0)
    const isCaught = httpCat ? hasHttpCat(httpCat.id): false;
    const canCatch = httpCat ? !isCaught && team.length < 10 : false;
    // // why is length defined above?

   // still issues with the errorMessage - but that's okay




    // if (errorMessage) {
    //     return <MissingPage message={errorMessage}/>
    // }
    // if (!httpCat) {
    //     return <MissingPage message={errorMessage}/>
    // }
  
    return (
        <div className="cat-card">
            {/* <h2>HTTP Status {`${httpCat}`}</h2> */}
            {/* <img 
            src={`https://http.cat/${httpCat}`}
             alt={httpCat}
             /> */}
           
            {/* <button 
            className="cat-action"
            disabled={canCatch && !isCaught}
            onClick={() => (isCaught ? removeHttpCat(httpCat.id) : addHttpCat(httpCat))}
            >
                {isCaught ? "Remove Cat" : "Add Cat"}
            </button> */}
            <CatCard/>
        </div>
    );
}


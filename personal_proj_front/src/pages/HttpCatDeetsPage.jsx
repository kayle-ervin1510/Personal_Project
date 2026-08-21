import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
// import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';

export default function HttpCatDeetsPage() {

    const [httpCat, setHttpCat] = useState(null);
    // const [errorMessage, setErrorMessage] = useState("");
    // const {id} = useParams();
    const {team, addHttpCat, removeHttpCat, hasHttpCat} = useOutletContext();
    const [errorMessage, setErrorMessage] = useState("");
    const {id} = useParams();

    const isCaught = httpCat ? hasHttpCat(httpCat.id): false;
    const canCatch = httpCat ? !isCaught && team.length < 10 : false;
   
    useEffect(() => {
    const lookupId = id?.charAt(0) + id?.slice(1) || "";
          


    const fetchHttpCat = async () => {
        try{
            const response = `https://http.cat/${lookupId}`
            // `/cat/${lookupId}`
            // Return an image, not a json - the cat api only deals with images
            // I don't need an axios call to http.cat - but ai can call it like did an image source
        
            setHttpCat(response.data);
            setErrorMessage("");
        }catch (error) {
            setHttpCat(null);
            setErrorMessage(`No such HTTP Cat with id of '${lookupId}' exists.`);
        }
    };
    fetchHttpCat();
}, [id]);

// Maybe swap out httpCat with lookupId?
// When I search for the id it comes up as: No such HTTP Cat with id of '<whatever I searched for>' exists.
// in the dev tools console I get the error: 
// Access to XMLHttpRequest at 
// 'https://http.cat/404' from 
// origin 'http://localhost:5173' 
// has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin'
//  header is present on the requested resource.
// Also lines 26 and 36 are gettting errors, probably with regards to id
    if (errorMessage) {
        return <MissingPage message={errorMessage}/>
    }
    if (!httpCat) {
        return <MissingPage message={errorMessage}/>
    }
   // use src, and not ImageSource - find and replace all ImageSources
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


import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
// import CatCard from '../components/Search/CatCard';
import MissingPage from './MissingPage';

export default function HttpCatDeetsPage() {

    const [httpCat, setHttpCat] = useState(null);
    // const [errorMessage, setErrorMessage] = useState("");
    // const {id} = useParams();
    const { addHttpCat, removeHttpCat, hasHttpCat} = useOutletContext();
    const [errorMessage, setErrorMessage] = useState("");
    const {id} = useParams();

    const isCaught = httpCat ? hasHttpCat(httpCat.id): false;
    const canCatch = httpCat ? !isCaught && team.length < 10 : false;
   
    const [team, setTeam] = useState(0)

//     useEffect(() => {
//     const lookupId = id?.charAt(0) + id?.slice(1) || "";
          


//     const fetchHttpCat = async () => {
//         try{
//             const response = `https://http.cat/${httpCat}`
            
        
//             setHttpCat(response.data);
//             setErrorMessage("");
//         }catch (error) {
//             setHttpCat(null);
//             setErrorMessage(`No such HTTP Cat with id of '${lookupId}' exists.`);
//         }
//     };
//     fetchHttpCat();

// }, [id]);

    // useEffect(() => {
    // const [src, setSrc] = useState(`https://http.cat/${httpCat}`);

    // const fetchHttpCat = async () => {
    // try {
    //     const response = `https://http.cat/${httpCat}`
    // setHttpCat(response.data)
    // setErrorMessage("")
    // }catch (error){
    //     setHttpCat(null);
    //     setErrorMessage(`No such HTTP Cat with id of '${httpCat}' exists.`)
    // }

    // }})
// maybe write a function that fetches the image from http cat
// and returns an image
// Request https://http.cat/{code}, e.g. https://http.cat/404
// https://freeapihub.com/apis/http-cat <- link to docs on http cat

    if (errorMessage) {
        return <MissingPage message={errorMessage}/>
    }
    if (!httpCat) {
        return <MissingPage message={errorMessage}/>
    }
  
    return (
        <div className="cat-ard">
            <h2>HTTP Status {httpCat}</h2>
            <img 
            src={`https://http.cat/${httpCat}`}
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


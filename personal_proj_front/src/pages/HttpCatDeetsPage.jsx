import { useParams, useOutletContext } from 'react-router-dom';

export default function HttpCatDeetsPage() {

    const [httpCat, setHttpCat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const {id} = useParams();
    const {list, addHttpCat, removeHttpCat, hasHttpCat} = useOutletContext();

    const isCaught = httpCat ? hasHttpCat(HttpCatDeetsPage.id): false;
    const canCatch = httpCat ? !isCaught && list.length < 10 : false;
   

   
    return (
        <div className="cat-ard">
            <h2>HTTP Status {httpCat}</h2>
            <img src={`https://http.cat/${httpCat}`}
             alt={`HTTP ${httpCat}`}
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


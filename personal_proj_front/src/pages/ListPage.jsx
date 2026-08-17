import { useOutletContext } from 'react-router-dom';

const ListPage = () =>{
    const {list, removeHttpCat} = useOutletContext();

    return (
        <div>
            <h2>My saved HTTP Codes</h2>
            {list.length === 0 ? (
                <h3>No HTTP Codes Added Yet</h3>
            ) : (
                <div>
                    {list.map((httpCat)=> (
                        <div key={httpCat.id}>
                            <h3>Status Code: {httpCat.id}</h3>
                            <img
                                src={`https://http.cat/${httpCat.id}`}
                                alt={`HTTP Status ${httpCat.id}`}
                            />
                            <button onClick={()=> removeHttpCat(httpCat.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )
        }
        </div>
    )
}
export default ListPage;



// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useOutletContext, useParams } from 'react-router-dom';
// import MissingPage from './MissingPage';
// import Card from '../components/Search/Card';
// // Do I have this as a list of my http cats, or as a 
// // seperate page for my http cats to be listed?

// const ListPage=()=>{
//     const [httpCat, setHttpCat] = useState(null);
//     const [errorMessage, setErrorMessage] = useState("");
//     const { id } = useParams();
//     const { list, removeHttpCat, addHttpCat, hasHttpCat } = useOutletContext()

//     const isCaught = httpCat ? hasHttpCat(httpCat.id) : false;
//     const canCatch = httpCat ? !isCaught && list.length < 10 : false;



//     useEffect(()=>{
//         const lookupId = id?.charAt(0).toUpperCase() + id?.slice(1).toLowerCase() || "";
//         const OgId = id ?? "";
    

//     const fetchHttpCat = async()=>{
//         try{
//             const response = await axios.get(
//                 `https://http.cat/${lookupId}`
//             );
//             setHttpCat(response.data);
//             setErrorMessage("");
//         }catch(err){
//             setHttpCat(null);

//             setErrorMessage(`No such HTTP Code '${lookupId}' exists!`)
//         }
//     };
//     fetchHttpCat();
//     }, [id]);

//     if (errorMessage) {
//         return <MissingPage message={errorMessage}/>;
//     }

//     if (!httpCat) {
//         return <MissingPage message={errorMessage}/>;
//     }



//     return (
//         <>
//         <div className="main-page-contents">
//             <h2>My HTTP List</h2>
//             {list.length === 0 ? (
//                 <h3>No HTTP Codes Added</h3>
//             ): (
//                 list.map((httpCat) => (
//                     <div key={httpCat.id}>
//                         <h3>{httpCat.id}</h3>
//                         <img src={`https://httpcats.com/${httpCat.id}.jpg`}/>
//                         <button 
//                         disabled={!canCatch && !isCaught}
//                         onClick={() => (isCaught ? removeHttpCat(httpCat.id): addHttpCat(httpCat))}>
//                             {isCaught ? "Remove" : "Add"}
//                             </button>
//                     </div>
//                 ))
//             )}
//         </div>
//         </>
//     )
// }
// export default ListPage;
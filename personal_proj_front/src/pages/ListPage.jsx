import { useOutletContext, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { updateCat as updateCatRequest, deleteCat as deleteCatRequest, createCat as createCatRequest } from '../user_utilities';
// No props for ListPage!
const ListPage = () =>{
  
  // const [httpCat, setHttpCat] = useState(null);
  //  const [errorMessage, setErrorMessage] = useState("");
    
   // const {id} = useParams();
   // const [capture, setCapture] = useState(false);
    
  // I think I'd have this here. 
   // Looking NoteForm and NoteDisplay, this seems to fit
   // i.e. ListPage has the "HomePage" for my adding cats, removing cats, etc
   // while HttpCatDeetsPage has the "NoteDisplay" which is the const handleing
    const [cat, setCat] = useState(null);
    const [cats, getCats] = useState(null);
    const [add, setAdd] = useState(false)
    const [addCat, setAddCat] = useState(cat.title)
    const {id} = useParams()
    
    const addCatHandle = async ()=> {
        const addedCat = await updateCatRequest(
            {
                id:cat.id,
                title: addCat
            }
        )
        if (addedCat){
            updateCat(addedCat)
            setAdd(false)            
        }
    }

    const deleteCatHandle = async () => {
        const wasDeleted = await deleteCatRequest(cat.id)
        if (wasDeleted) {
            // previously rmCat
           rmHttpCat(cat)
        }
    }
// old code
//     const [cat, setCat] = useState(null)
    // const [httpCat, setHttpCat] = useState(null)
    // const [cats, setCats] = useState(useLoaderData())
    // const addHttpCat = (cat) => {
    //     setCat([...cats, cat])
    // }

    // const rmHttpCat = (rmHttpCat) => {
    //     setCats(cats.filter((cat)=>(
    //         cat.id != rmHttpCat.id
    //     )))
    // }

    // const updateCat = (editTeam) => {
    //     setCats(cats.map((cat)=> (
    //         cat.id === editTeam.id ? editTeam : cat
    //     )))
    // }
    // //

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const newList = await createCat({title: httpCat})
    //     if (newList) {
    //         addHttpCat(newList)
    //     }
    //     setHttpCat('')
    // }
   

    return (
        <>
        <div className="main-page-contents">
               
                            
                
            <h2>My saved HTTP Codes</h2>
            {cats.length === 0 ? (
                <h2>No HTTP Codes saved yet!</h2>
            ) : (
                cats.map((httpCat) => (
                    <div className="cat-card" key={httpCat.id}>
                        <h3>{httpCat}</h3>
                        <img src={`https://http.cat/${httpCat}`} alt={`HTTP Cat ${httpCat}`} />
                        <button onClick={() => releaseCat(httpCat.id)}>Release</button>
                    </div>
                ))
            )}
                
        </div>
        
    </>
    )
}
export default ListPage;

// Possible Code:
 // const [add, setAdd] = useState(false)
    // const [addCat, setAddCat] = useState(cat.title)
    
    // const addCatHandle = async ()=> {
    //     const addedCat = await updateCatRequest(
    //         {
    //             id:cat.id,
    //             title: addCat
    //         }
    //     )
    //     if (addedCat){
    //         updateCatList(addedCat)
    //         setAdd(false)            
    //     }
    // }

    // const deleteCatHandle = async () => {
    //     const wasDeleted = await deleteCatRequest(cat.id)
    //     if (wasDeleted) {
    //        rmCat(cat)
    //     }
    // }
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { updateCatList as updateCatListRequest, deleteCat as deleteCatRequest, createCatList } from '../user_utilities';

const ListPage = ({rmHttpCat, updateCatList, addHttpCat}) =>{

    const [httpCat, setHttpCat] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newList = await createCatList({title: httpCat})
        if (newList) {
            addHttpCat(newList)
        }
        setHttpCat('')
    }
    // const [add, setAdd] = useState(false)
    // const [addCat, setAddCat] = useState(cat.title)
    
    // const addCatHandle = async ()=> {
    //     const addedCat = await updateCatListRequest(
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

    const deleteCatHandle = async () => {
        const wasDeleted = await deleteCatRequest(cat.id)
        if (wasDeleted) {
           rmCat(cat)
        }
    }

    return (
        <>
        <div className="main-page-contents">
               
                            
                
            <h2>My saved HTTP Codes</h2>
            {team.length === 0 ? (
                <h2>No HTTP Codes saved yet!</h2>
            ) : (
                team.map((httpCat) => (
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

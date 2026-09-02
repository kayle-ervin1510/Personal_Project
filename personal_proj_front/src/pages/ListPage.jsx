import { useOutletContext, useLoaderData } from 'react-router-dom';
import CatDisplay from '../components/CatDisplay';
import { useState } from 'react';

const ListPage = () =>{
  
  
    const [cat, setCat] = useState(useLoaderData())
    // const [httpCat, setHttpCat] = useState(null)
    const [cats, setCats] = useState(useLoaderData())
    
    const addHttpCat = (cat) => {
        setCat([...cats, cat])
    }

    const rmHttpCat = (rmHttpCat) => {
        setCats(cats.filter((cat)=>(
            cat.id != rmHttpCat.id
        )))
    }

    const updateCat = (editTeam) => {
        setCats(cats.map((cat)=> (
            cat.id === editTeam.id ? editTeam : cat
        )))
    }


    return (
        <>

        
        <div className="main-page-contents">
               
                            
                
            <h2>My saved HTTP Codes</h2>
            {cats.length === 0 ? (
                <h2>No HTTP Codes saved yet!</h2>
            ) : (
                cats.map((cats) => (
                    <CatDisplay
                    key = {cat.id}
                    cat={cat}
                    rmHttpCat={rmHttpCat}
                    updateCat={updateCat}
                    />


                ))
            )}
                
        </div>
        
    </>
    )
}
export default ListPage;

// old return code:
                    // <div className="cat-card" key={httpCat.id}>
                    //     <h3>{httpCat}</h3>
                    //     <img src={`https://http.cat/${httpCat}`} alt={`HTTP Cat ${httpCat}`} />
                    //     <button onClick={() => releaseCat(httpCat.id)}>Release</button>
                    // </div>
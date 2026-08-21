import { useOutletContext } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ListPage = () =>{
    const {team, removeHttpCat} = useOutletContext();
    // const count = team?.length
    return (
        <>
        <div className="main-page-contents">
               
                            
                
            <h2>My saved HTTP Codes</h2>
             {team.length >= 0} ? (
                
                <h2>No HTTP Codes Added Yet</h2> 
            ): ()
            {team.map((httpCat)=> (
                 
                    
                        <div className="cat-card" key={httpCat.id}>
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
        
    </>
    )
}
export default ListPage;


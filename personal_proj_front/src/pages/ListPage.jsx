import { useOutletContext } from 'react-router-dom';

const ListPage = () =>{
    const {team, releaseCat} = useOutletContext();
    // length is marked as undefined, which means team is undefined. Need to define team
    
    return (
        <>
        <div className="main-page-contents">
               
                            
                
            <h2>My saved HTTP Codes</h2>
            {/* {team.length === 0 ? (
                <h2>No HTTP Codes saved yet!</h2>
            ) : (
                team.map((httpCat) => (
                    <div>
                        <h3>{httpCat}</h3>
                        <img src={`https://http.cat/${httpCat}`} alt={`HTTP Cat ${httpCat}`} />
                        <button onClick={() => releaseCat(httpCat.id)}>Release</button>
                    </div>
                ))
            )} */}
                
        </div>
        
    </>
    )
}
export default ListPage;

// length is still marked as undefined
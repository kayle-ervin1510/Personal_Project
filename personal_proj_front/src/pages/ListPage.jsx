import { useOutletContext } from 'react-router-dom';

const ListPage = () =>{
    const {list, removeHttpCat} = useOutletContext();

    return (
        <>
        <div className="main-page-contents">
            <h2>My saved HTTP Codes</h2>

            {list.length === 0 ? (
                <h3>No HTTP Codes Added Yet</h3>
            ) : (
                <div>
                    {list.map((httpCat)=> (
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
            )
        }
        </div>
    </>
    )
}
export default ListPage;
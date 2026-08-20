import { useOutletContext } from 'react-router-dom';

const ListPage = () =>{
    const {team, removeHttpCat} = useOutletContext();

    return (
        <>
        <div className="main-page-contents">
            <h2>My saved HTTP Codes</h2>

            {team.length === 0 ? (
                <h3>No HTTP Codes Added Yet</h3>
            ) : (
                <div>
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
            )
        }
        </div>
    </>
    )
}
export default ListPage;

// 08/20/2026 - morning
// swapped list for team
// When I click on the link for home, I'm do not see the HomePage rendered
// When I click the link for list, I don't see the ListPage rendered
// Can't seem to search for anything in the search bar either
// search button appears to be stuck.
// 08/20/2026 - afternoon
// Search button no longer stuck, I can click it. I just don't get any images. 
// Also I tried clicking on the link in src, and it comes up as a code 404
// 08/20/2026 - late afternoon
// when I click on My List, I am told:
// Cannot read properties of undefined(reading 'length')
// i.e. team is undefined...for some reason
// 08/20/2026 - later afternoon
// can't login now
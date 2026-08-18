import { useParams, useOutletContext } from 'react-router-dom';

const HttpCatDeetsPage =() => {
    const {id} = useParams();
    const {list =[], addHttpCat, removeHttpCat, hasHttpCat} = useOutletContext();

    const Httpcode = id?.trim();

        // Why do I have this test Httpcode?
    const isValidCode = /^[1-5]\d{2}$/.test(Httpcode);

    const isCaught = list.some((cat)=>cat.id === Httpcode);
    //const isCaught = Httpcode ? hasHttpCat(Httpcode) : false;
    const canCatch = !isCaught && list.length < 10;

    if (!isValidCode) {
        return (
            <div className = "main-page-contents">
                <h2>Invalid HTTP Code</h2>
                <p>'{Httpcode}' is not a valid Http code. Must be a three digit value.</p>
            </div>
        )
    }
    return (
        <div>
            <h2>HTTP Status {Httpcode}</h2>
            <img src={`https://http.cat/${Httpcode}`} alt={`HTTP ${Httpcode}`}/>

            <div>
                {isCaught ? (
                    <button onClick={()=>removeHttpCat(Httpcode)}>Remove Cat</button>
                ) : (
                    <button 
                        disabled={!canCatch}
                        onClick={() => addHttpCat({id:Httpcode})}
                    >
                        {list.length >= 10 ? "Your list is full!" : "Collect Cat"}
                    </button>
                )}
            </div>
        </div>
    )
}

export default HttpCatDeetsPage
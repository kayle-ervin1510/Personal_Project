export default function Form({ handleSubmit, setHttpCatId, httpCatId}) {
    return (
        <form 
        onSubmit={(event) => handleSubmit(event)} 
        className="mb-6 p-6 rounded-x1"
        >
            <input
                id="http-number"
                type="text"
                name="name"
                placeholder="Try '308'"
                value={httpCatId ?? ""}
                onChange={(e) => setHttpCatId(e.target.value)}
                className="flex-1 rounded-md border border-slate-300 px-3 py-1 outline-none"
            />
            <button 
            type="submit"
            className="font-semibold text-black"
            >Search!</button>
        </form>
    );
}

// should I take out name="name"? Maybe swap it out with something like httpCat={httpCat}?
// originally value ={httpCat} was value={httpCat ?? ""}
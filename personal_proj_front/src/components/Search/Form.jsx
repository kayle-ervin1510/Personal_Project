export default function Form({ handleSubmit, setHttpCat, httpCat}) {
    return (
        <form onSubmit={(event) => handleSubmit(event)} className="mb-6 p-6 rounded-x1">
            <input
                id="http-number"
                type="text"
                // name="name"
                placeholder="Search...Try '308'"
                value={httpCat ?? ""}
                onChange={(e) => setHttpCat(e.target.value)}
                className="flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <button type="submit">Search!</button>
        </form>
    );
}

// should I take out name="name"? Maybe swap it out with something like httpCat={httpCat}?
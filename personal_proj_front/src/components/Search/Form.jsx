export default function Form({ handleSubmit, setHttpCatName, httpCatName}) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="http-number"
                type="number"
                name="name"
                placeholder="Search...Try '308'"
                value={httpCatName ?? ""}
                onChange={(e) => setHttpCatName(e.target.value)}
                className="flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <button type="submit">Search!</button>
        </form>
    );
}
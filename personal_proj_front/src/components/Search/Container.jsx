import CatCard from './CatCard';

export default function Container({list}) {
    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
                {/* issue with line 10 - apparently map is undefined */}
                {
                    list.map(
                        (httpCat)=>(
                            <CatCard
                                httpCat={httpCat}
                                key={httpCat.id}
                            />
                        )
                    )
                }

        </div>
        </>
    )
}
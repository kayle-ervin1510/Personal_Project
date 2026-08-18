import CatCard from './CatCard';

export default function Container({list}) {
    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
                
                {
                    httpList.map(
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
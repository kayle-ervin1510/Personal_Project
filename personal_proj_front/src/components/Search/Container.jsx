import CatCard from './CatCard';
// I think I need to remove list...maybe repalce it with team?
// team is undefined
// need to define it
export default function Container({team, httpCat}) {
    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
               
                {/* {
                    team.map(
                        (httpCat)=>( */}
                            <CatCard
                                httpCat={httpCat}
                                key={httpCat.id}
                            />
                {/*          )
                     )
                 } */}

        </div>
        </>
    )
}
// defined team in search, so no longer getting an error there.
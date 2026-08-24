import CatCard from './CatCard';
// define team, and find a way to add to it
export default function Container({team}) {

    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
               
                  {
                    team.map(
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
// defined team in search, so no longer getting an error there.
// id is listed as undefined?
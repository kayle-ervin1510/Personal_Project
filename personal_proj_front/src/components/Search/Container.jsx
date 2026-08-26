import CatCard from './CatCard';

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

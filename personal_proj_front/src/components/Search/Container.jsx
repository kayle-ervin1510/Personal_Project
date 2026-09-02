import CatCard from './CatCard';

export default function Container({cats}) {
   
    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
               
                  {
                    cats.map(
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

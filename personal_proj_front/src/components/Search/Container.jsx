import CatCard from './CatCard';
// import {useParams} from 'react-router-dom';
// define team, and find a way to add to it
export default function Container({team}) {
    // const {id} = useParams()
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

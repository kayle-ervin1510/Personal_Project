import CatCard from './CatCard';
// I think I need to remove list...maybe repalce it with team?
export default function Container({httpCat}) {
    return (
        <>
         <div id="cat-container"
            className="flex flex-wrap items-stretch gap-5">
                {/* issue with line 10 - apparently map is undefined */}
                {
                    // team.map(
                    //     (httpCat)=>(
                            <CatCard
                                httpCat={httpCat}
                                key={httpCat.id}
                            />
                    //     )
                    // )
                }

        </div>
        </>
    )
}
// after commenting out the team.map, httpCatis now listed as undefined - which is possible
// when I put httpCat into the COntainer parameters
// id in httpCat.id is said to be undefined
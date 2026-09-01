import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';





function App() {
  
  const [user, setUser] = useState(useLoaderData());
  

  

  return (
    <section>
      <NavBar />
      <div>
      <Outlet 
      context={{ 
        user, 
        setUser
        
        
        }} 
        />
      </div>

  </section>
  )
}

export default App
// catchCat,
        // releaseCat,
        // hasCat
        // const catchCat = (httpCat) => {
  //   setTeam((last)=>{
  //     if(last.length >= 10) return last
  //     if(last.some((cat)=>cat.id === httpCat.id)) return last
  //     return [...last, httpCat]
  //   });
  // };

  // const releaseCat = (httpCatId)=>{
  //   setTeam((last)=>last.filter((httpCat)=> httpCat.id !== httpCatId))
  // }
  // const hasCat = (httpCatId) => ((httpCat)=> httpCat.id === httpCatId);

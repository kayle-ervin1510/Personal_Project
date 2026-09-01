import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';





function App() {
  // does adding useLoaderData for team make it stick?
  // const [team, setTeam] = useState(useLoaderData());
  // const [team, setTeam] = useState([])
  const [user, setUser] = useState(useLoaderData());
  

  const catchCat = (httpCat) => {
    setTeam((last)=>{
      if(last.length >= 10) return last
      if(last.some((cat)=>cat.id === httpCat.id)) return last
      return [...last, httpCat]
    });
  };

  const releaseCat = (httpCatId)=>{
    setTeam((last)=>last.filter((httpCat)=> httpCat.id !== httpCatId))
  }
  const hasCat = (httpCatId) => ((httpCat)=> httpCat.id === httpCatId);


  return (
    <section>
      <NavBar />
      <div>
      <Outlet 
      context={{ 
        user, 
        // team
        setUser,
        catchCat,
        releaseCat,
        hasCat,
        
        }} 
        />
      </div>

  </section>
  )
}

export default App

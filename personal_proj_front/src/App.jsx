import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar';
// import HttpCatDeetsPage from './pages/HttpCatDeetsPage';




function App() {
  const [team, setTeam] = useState([])
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
  const hasCat = (httpCatId) => team.some((httpCat)=> httpCat.id === httpCatId);
  // const test_connection = async()=>{
  //   let response = await api.get("/api/v1/test")
  //   console.log(response)
  // }

  return (
    <>

      <main className="main">
      <Outlet context={{ user, setUser}} />
      </main>

    </>
  )
}

export default App

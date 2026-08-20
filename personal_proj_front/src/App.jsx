import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';




function App() {
  const [list, setList] = useState([])
  const [user, setUser] = useState(useLoaderData());
  
  // const test_connection = async()=>{
  //   let response = await api.get("/api/v1/test")
  //   console.log(response)
  // }

  return (
    <>
    <NavBar>
      <main>
      <Outlet context={{ user, setUser }} />
      </main>
      </NavBar>
    </>
  )
}

export default App

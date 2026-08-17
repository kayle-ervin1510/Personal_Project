import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';




function App() {
  const [user, setUser] = useState(useLoaderData());
  // const test_connection = async()=>{
  //   let response = await api.get("/api/v1/test")
  //   console.log(response)
  // }

  return (
    <>
      <Outlet context={{ user, setUser }} />
    </>
  )
}

export default App

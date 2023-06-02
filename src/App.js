import { useEffect, useState } from 'react';
import './App.css';
import {ClimbingBoxLoader, SyncLoader}  from "react-spinners"

function App() {

  const[loading , setloading]= useState(true)

  useEffect(()=>{
       console.log("useEffect runing");
       setTimeout(()=>{
            setloading(false)
       },3000)
  },[])
  return (
    <div className="App">
      {
        loading?
        (<div className='loader'>
          <ClimbingBoxLoader color='red' size={30} speedMultiplier={2}/>
          <SyncLoader color="#36d7b7" />

        </div>)
        :(<h1>home page kkkkkk</h1>)
      }
     
    </div>
  );
}

export default App;

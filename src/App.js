import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Works from './components/Works';
function App() {
  const [taches,setTaches]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response)=>{
      return response.json()
    }).then((result)=>{
      setTimeout(()=>{
        setTaches(result)
       },2000)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <div className="App">
        <h1>Gestion de Projet</h1>
        <Routes>
          <Route path='/' element={<Works taches={taches}/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;

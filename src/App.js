import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Works from './components/Works';
import Ajout from './components/Ajout';
import Affichage from './components/Affichage';
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
          <Route path='/' element={<Works taches={taches} />}/>
          <Route path='/ajouter' element={<Ajout taches={taches} setTaches={setTaches} />}/>
          <Route path='/affichage' element={<Affichage  />}/>
        </Routes>
        
      
    </div>
  );
}

export default App;

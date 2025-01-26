import { useState } from "react"
import { Link } from "react-router-dom"
import Ajout from "./Ajout"
import Affichage from "./Affichage"

export default function Works({taches}){

    const handleShow=(t)=>{
        localStorage.setItem('id',t.id)
        localStorage.setItem('title',t.title)
        localStorage.setItem('completed',t.completed)
        localStorage.setItem('userId',t.userId)
    }
   
    const Alltaches=taches.map((t)=>{
        return <tr key={t.id}>
                   <td>{t.id}</td>
                   <td>{t.title} </td>
                   <td >{t.completed?"true":"false"}</td>
                   <td>
                    <Link to='/affichage'>
                     <button onClick={()=>{handleShow(t)}} class='btn btn-info btn-sm'>afficher</button>
                     </Link>
                      <button class='btn btn-success btn-sm'>modifier</button>
                       <button class='btn btn-danger btn-sm'>supprimer</button>
                   </td>
                   
               </tr>
    })
    
    return (

       <div className='container mt-4 py-5'>
                 <table className="table table-striped border border-3">
                    <thead>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </thead>
                    {Alltaches.length!==0?
                    <tbody>
                        {Alltaches}
                    </tbody>:<div className="text text-center bg-warning w-75">waiting the data....</div>
                     }
                 </table>
                 <Link to='/ajouter'>
                    <button class='btn btn-primary'>ajouter</button>
                 </Link>
       </div>
        
        
    )
}
import { parse } from "postcss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Modification({taches,setTaches}){
    const history=useNavigate()
    const [tache,setTache]=useState({
        id:localStorage.getItem('id'),
        title:localStorage.getItem('title'),
        isCompleted:JSON.parse(localStorage.getItem('completed'))
    })
    const handleUpdate=()=>{
        const handleTaches=taches.map((t)=>{
           if(t.id==tache.id){
            return {...t,title:tache.title,isCompleted:tache.isCompleted}
           }
           return t
        })
        setTaches(handleTaches)
        history('/')
    }
    return (
        <div className="container ">
            <h3>modifier une tache</h3>
        <form onSubmit={(e)=>e.preventDefault()} className="card w-75 m-auto p-3">
            <div style={{display:'flex',flexDirection:"column"}}>
                <label className="form-label">title</label>
                <input value={tache.title} onChange={(e)=>{setTache({...tache,title:e.target.value})}} class='form-control' type='text'/>
                <label className="form-label">is completed</label>
                <input   checked={tache.isCompleted} onChange={(e)=>{setTache({...tache,isCompleted:e.target.checked})}} class='form' type='checkbox'/>
            </div>
            <button onClick={handleUpdate}  className="btn btn-success m-4">modifier</button>
        </form>
        </div>
    )
}
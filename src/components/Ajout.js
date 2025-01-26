import { useState } from "react"
import { useNavigate } from "react-router-dom"
let tacheId=21
export default function Ajout({taches,setTaches}){
    const history=useNavigate()
    const [tache,setTache]=useState({
        title:'',
        isCompleted:false,
    })

    const handleAdd=()=>{
        const newTache={
            id:tacheId,
            title:tache.title,
            completed:tache.isCompleted
        }
        setTaches([...taches,newTache])
       tacheId+=1
       history('/')
    }


    return (
        <div className="container ">
            <h3>ajouter une tache</h3>
        <form onSubmit={(e)=>e.preventDefault()} className="card w-75 m-auto p-3">
            <div style={{display:'flex',flexDirection:"column"}}>
                <label className="form-label">title</label>
                <input value={tache.title} onChange={(e)=>{setTache({...tache,title:e.target.value})}} class='form-control' type='text'/>
                <label className="form-label">is completed</label>
                <input   checked={tache.isCompleted} onChange={(e)=>{setTache({...tache,isCompleted:e.target.checked})}} class='form' type='checkbox'/>
            </div>
            <button onClick={handleAdd} className="btn btn-primary m-4">ajouter</button>
        </form>
        </div>
    )
}
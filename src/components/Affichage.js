import { useNavigate } from "react-router-dom"
export default function Affichage(){
    const history=useNavigate()
    const id=localStorage.getItem('id')
    const title=localStorage.getItem('title')
    const completed=localStorage.getItem('completed')
    const userId=localStorage.getItem('userId')
    console.log(id,title,completed,userId)
    
    return (
        <div className="container card">
            <div className="card m-3">
            <h3>plus d'information sur la taches {id}</h3>
            </div>
            <div>
                <p>le numero du proprietaire de cette  tache est :<span style={{color:'green',fontSize:"20px"}}>{userId}</span></p>
                <p>le numero de la tache est :<span style={{color:'green',fontSize:"20px"}}>{id}</span></p>
                <p>le titre de la tache est :<span style={{color:'green',fontSize:"20px"}}>{title}</span></p>
                <p>si la tache complete ou non:<span style={{color:'green',fontSize:"20px"}}>{completed}</span></p>
            </div>
            <button onClick={()=>history('/')} className="btn btn-primary w-50 m-auto">retour</button>
        </div>

        
    )
}
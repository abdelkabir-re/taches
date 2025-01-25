export default function Works({taches}){
    const Alltaches=taches.map((t)=>{
        return <tr>
                   <td>{t.id}</td>
                   <td>{t.title}</td>
                   <td>{t.completed}</td>
                   <td>
                     <button class='btn btn-info btn-sm'>afficher</button>
                      <button class='btn btn-success btn-sm'>afficher</button>
                       <button class='btn btn-danger btn-sm'>afficher</button>
                   </td>
                   
               </tr>
    })
    return (
       <div className='container mt-4'>
    
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
       </div>
        
        
    )
}
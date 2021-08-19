import React from 'react';

export default function Tab1({users, handleDelete}){
    // Filtrer les Users par avec role==admin
    const pages = users.filter((user)=>{
        return (user.role === "admin")
    })

    return(
        <div className="_container">
           <div className="table">
                <table className="admin_list">
                    <thead>
                       <tr>
                            <th>Nom et prénom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Ville</th>
                            <th></th>
                       </tr>
                    </thead>
                    <tbody>
                        { 
                            pages && pages.map((user, index)=>
                                <tr className="card" key={index}>
                                    <td>{user.fst_name} {user.lst_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.tel}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <input type="checkbox"  name="delete" id="delete"/>
                                        {/* <button className="btn" onClick={()=>handleDelete(user.id)}>Supprimer</button> */}
                                    </td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                <div className="user_btn">
                    <button className="btn" onClick={(e)=>handleDelete(e)}>Supprimer</button>
                </div>
           </div>
        </div>
    )
}
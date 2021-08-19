import React from 'react';

export default function Tab2({users}){

    // Filtrer les Users par avec role==employee
    const pages = users.filter((user)=>{
        return (user.role === "employee")
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
                            pages && pages.map((user, index)=>(
                                <tr className="card" key={index} style={{marginTop: '1rem'}}>
                                    <td>{user.fst_name} {user.lst_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.tel}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <input type="checkbox" name="delete" id="delete"/>
                                    </td>
                                </tr>
                        
                            ))
                        }
                    </tbody>
                </table>
                <div className="user_btn">
                    <button className="btn">Supprimer</button>
                </div>
           </div>
        </div>
    )
}
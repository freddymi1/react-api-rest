import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../../services/service';

export default function AddUser(){
    const [name, setName] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [ville, setVille] = useState("")
    const [role, setRole] = useState("")

    const {history} = useHistory();

    const handleSubmit = (e) => {
        const users = {
            name, 
            lastName,
            email,
            phone,
            ville,
            role
        };
        axios.post(baseUrl+'/users', users)
            .then((response) => {
                setName(response.data.data.lst_name)
                setLastname(response.data.data.fst_name)
                setEmail(response.data.data.email)
                setPhone(response.data.data.tel)
                setVille(response.data.data.city)
                setRole(response.data.data.role)
                alert("Users ajouter avec success")
                history.push("/")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(
        <div className="_container">
            <div className="form-header">
                <h3>Ajouter un utilisateur</h3>
            </div>
            <form action="">
                <div className="form">
                    <div className="add_user">
                        <div className="block_1">
                            <div className="form-group">
                                <div className="label">Prenom</div>
                                <input 
                                type="text" 
                                className="input-form" 
                                name="name" id="name" 
                                placeholder="Prenom"
                                onChange={(e)=>setLastname(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <div className="label">E-mail</div>
                                <input type="email"
                                className="input-form" 
                                name="name" id="name" 
                                placeholder="E-mail"
                                onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <div className="label">Ville</div>
                                <input type="text" 
                                className="input-form" 
                                name="name" id="name" 
                                placeholder="Ville"
                                onChange={(e)=>setVille(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="block_2">
                            <div className="form-group">
                                <div className="label">Nom</div>
                                <input type="text" onChange={(e)=>setName(e.target.value)} className="input-form" name="name" id="name" placeholder="Nom"/>
                            </div>
                            <div className="form-group">
                                <div className="label">Téléphone</div>
                                <input type="tel" onChange={(e)=>setPhone(e.target.value)} className="input-form" name="name" id="name" placeholder="Téléphone"/>
                            </div>
                            <div className="form-group">
                                <div className="label">Role</div>
                                <select className="input-form" onChange={(e)=>setRole(e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="employer">Employée</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="user_btn" style={{right:"2rem"}}>
                        <button className="btn" onClick={(e)=>handleSubmit(e)}>Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
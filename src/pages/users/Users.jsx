import React, {useState, useEffect} from 'react';
import Tab1 from '../../components/userlist/Tab1';
import Tab2 from '../../components/userlist/Tab2';
import axios from 'axios';
import { baseUrl } from '../../services/service';

export default function Users(){
    const [users, setUsers]=useState([])
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)

    /**Fetching data from API */
    useEffect(()=>{
        getData();
    },[])

    const getData =()=>{
        axios.get(`${baseUrl}/users`,{
            headers : { 
                
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response)=>{
            setUsers(response.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleDelete = (id,) => {
        if(window.confirm("Tu es sur de le supprimer? ")){
            window.location.reload()
            axios.delete(baseUrl+`/pieces/${id}`,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res)=>{
                setUsers(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }


    /**Tabs */

    const showTab1 =() =>{
        setTab1(true);
        setTab2(false);
    }
    const showTab2 =() =>{
        setTab1(false);
        setTab2(true);
    }


    return(
        <div className="_container">
            <div className="tabs">
                <div className="tabs__header">
                    <div className={`tabs_1 active`}>
                        <div className="tab_title" onClick={()=>showTab1()}>
                            Admin
                        </div>
                    </div>
                    
                    <div className="tabs_1">
                        <div className="tab_title" onClick={()=>showTab2()}>
                            Employées
                        </div>
                    </div>
                    <div className="user_btn">
                        <a href="/adduser" className="btn">Ajouter un utilisateur</a>
                    </div>
                </div>
                <div className="tab_content">
                    {
                        tab1 &&  <Tab1 handleDelete={handleDelete} users={users}/>
                        
                    }
                    {
                        tab2 &&  <Tab2 users={users}/>
                        
                    }
                </div>
            </div>
        </div>
    )
}
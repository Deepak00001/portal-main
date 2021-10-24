import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Quesbar.css";


export const Quesbar = (props) => {

    
    const [users, setUsers] = useState([]);
     const forGettingIndex = (e)=>{
         console.log("helooa")
         console.log(e)
         props.onclickhandler(e.target.innerText)
      console.log(e.target.innerText);
     }


    
    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .then(error => console.log(error))
    },[]);


    var count=0;

    

    const Visted = () => {
         var count = 0;
    }


    function NotVisted(){
        
    }
    function Marked(){
        
    }

    return (
        <div className="first">
            <div className="second">
            {users.map((user)=>(
                <button className="numbox" onClick={forGettingIndex}>{users.indexOf(user)+1}</button>
            ))
                }

            </div>
            <span>visted {Visted}</span><br/>
            <span>Not visted {NotVisted}</span><br/>
            <span>Marked {Marked}</span><br/>
        </div>
    )
}
export default Quesbar;
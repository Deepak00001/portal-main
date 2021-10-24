import React, { useEffect, useState } from 'react'
import Questions from '../Question/Questions'
import QNumbers from '../QuestionNumbers/QNumbers'
import Topbar from '../Topbar/Topbar'
import "./Test.css"
import Testapi from '../testapi/Testapi'
import Quesbar from '../quesbar/Quesbar'
import axios from 'axios'



export default function Test() {
  
  const [Users,setUsers]= useState([])
  const [index,setIndex]= useState("")
  
  useEffect(function(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setUsers(response.data))
    .then(error => console.log(error))
  },[]);
   const changequestion = (eventtarget)=>{
     console.log(eventtarget)
     setIndex(eventtarget)
   }
    return (
        <>
         <Topbar/>
         <div className="testContainer">
           <div className="qnumContainer">
             {/* <QNumbers/> */}
           <Quesbar onclickhandler = {changequestion}></Quesbar>
           </div>
           <div className="questionsContainer">
             {/* <Questions/> */}
             <Testapi hello={index} />
           </div>
         </div> 
        </>
    )
}

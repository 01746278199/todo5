import React, { useState } from 'react'


export default function Todos() {
    const [todos,setTodos] = useState([])
    const [input,setInput] = useState("")

   const  Handler =()=>{
    setTodos ([input,...todos])
    setInput([''])
   }
    const inputHandler = (e)=>{
            e.preventDefault()
            Handler()
    }
    const detelteItem = () =>{
        
    }
  return (
        
    <div>
        <form action="#" onSubmit={inputHandler} >
            <input type="text" value={input} onChange={(e) =>setInput(e.target.value)} placeholder='Write Your Opinion'/>
            <button>Add</button>
        </form>
        <ul>
            {
              
                 todos.map((value,index) =>(
                    <li key={index}>{value}
                    <button onClick={detelteItem}>Delete</button>
                    </li> 
                    ))
            }
        </ul>
    </div>
  )
}

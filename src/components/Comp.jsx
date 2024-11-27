import React from 'react'


export default function Comp(props) {
  return (
    <div className='tarea'>
        <input type="checkbox"/>
        <p>{props.tarea}</p>
        <button onClick={() => props.eliminarTarea(props.index)}><i class="bi bi-trash3-fill"></i></button>
      </div> 
  )
}

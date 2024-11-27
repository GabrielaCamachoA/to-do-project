import { useState } from 'react'
import './App.css'
import Comp from './components/comp'

function App() {
  const [texto, setTexto] = useState("")
  const [tareas, setTareas] = useState([])
  
  function agregarTarea() {
    
    if(texto != ""){
      setTareas([...tareas, texto])
      setTexto("")
    }
  }
  function actualizarTexto(event) {
    setTexto(event.target.value)
  }

  function eliminarTarea(index) {
    setTareas(tareas =>{
      let newTarea = [...tareas]
      newTarea.splice(index,1)
      return newTarea
    })
    alert("Has eliminado una tarea, sigue complentándolas!");
  }

  return (
    <>
    <div className="inputs">
    <h1>Lista de Tareas</h1>
    <h4>Agregar Tarea</h4>
      <input type="text" onChange={actualizarTexto} value={texto} placeholder='¿Qué hay que hacer?' />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      {tareas.map((tarea,index) =>{
      return (
        <Comp key={index} tarea={tarea} eliminarTarea={eliminarTarea} index={index}/>
      )
    })}
    </div>
    </>
  )
}

export default App

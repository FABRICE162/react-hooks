import React ,{createContext, useContext, useEffect, useState} from 'react'
import Effects from './Effects'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Context from './Context'

export const DataContext = createContext()


function App() {


 
  const array=useState(0)
  const counter=array[0]
  const setCounter =array[1]
  function add(){
    setCounter(counter +1)
  }
  function minus(){
    setCounter(counter -1)
  }
  console.log(array);  
  return (
    <div>
      {/* <DataContext.Provider value={name}> */}

      <BrowserRouter >
      <Routes >
      <Route path='/' element={
        
        <div className="container">
        <h1>usestate</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={add} id='btn'>Add to counter +</button>
      <button onClick={minus} id='btn'>Minus to counter -</button>
      <div style={{paddingTop:"30px"}}>
        <Link to={'/context-page'} className='context'>View the Usecontext Page </Link>
        <h3 className='sub'>Name: Mushimiyimana Fabrice</h3>
        <h3 className='sub'>Class:L5SOD</h3>
      </div>
      <Effects />
      
      </div>
      } />
      <Route path='/context-page' element={<Context name={name}/>} />
      </Routes>
      </BrowserRouter>
      {/* </DataContext.Provider> */}
    </div>
  )
}

export default App

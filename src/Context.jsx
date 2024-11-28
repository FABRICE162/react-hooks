import React, { useContext } from 'react'
import { DataContext } from './App'
import { Link } from 'react-router-dom'
import './index.css'

function Context() {

  
  return (
    <div>
        <div className='back'>
        <button className='back'><Link to={'/'}>back to home</Link></button>
        <h1>This is the useContext Hook</h1>
        <p>we are accessing the data from the parent component using usecontext rather that using the props</p>
      <h1>Parent component</h1>
      
         </div>   
    </div>
  )
}

export default Context

// Invalid input
//Please enter a valid name and age(non-empty values). 
//Okay 
import React from 'react' 
import './error.css';

const Error = ({title,message,errorHandler}) => {
  return ( 
    <> 
    <div onClick={errorHandler} className='backdrop'/>
    <div className='error'>
        <h1>{title}</h1>
        <p>{message}</p> 
        <div className='btn-error'>
          <button onClick={errorHandler}>Okey</button>
        </div>
    </div> 
    </>
  )
}

export default Error

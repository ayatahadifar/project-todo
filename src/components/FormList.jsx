import React from 'react' 
import './formList.css'

const FormList = ({data}) => { 
  if(data.length < 1) {
    return (
      <h2 className='formList list-style'>NO exist</h2>
    )
  }


  return (
    <div>
      <ul className='formList'> 
        {data.map((item) => (
          <li className='list-style' key={item.id}>
            <h1>{item.textInput}</h1> 
            <h2>{item.textAge} years old.</h2> 
          </li>
        ))}
      </ul>  
    </div>
  )
}

export default FormList

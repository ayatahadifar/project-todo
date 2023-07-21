import React from 'react' 
import './form.css'; 
import Error from './Error';
import './error.css';

const Form = ({enterInput,setEnterInput,enterAge,setEnterAge,data,setData,showError,setShowError}) => { 
    const changeInput = (e) => {
        setEnterInput(e.target.value)    
    } 
    const changeAge =(e) => {
        setEnterAge(e.target.value)
    } 
    const handleClick = () => {
        console.log(enterInput,enterAge) 
        if(enterInput.trim().length < 1 || enterAge.trim().length < 1 ) {
            setShowError({
                title:'Invalid input', 
                message:'Please enter a valid name and age ( non-empty values ).'
            })  
            return;    
        } 
        if(enterAge< 1) {
            setShowError({
                title:'Invalid age', 
                message:'Please enter a valid age ( Greater than 0 ).'    
            })  
            return;  
        }

        setData([
            ...data,
            {
                textInput:enterInput, textAge:enterAge, id:Date.now()
            }
        ])
        setEnterInput('') 
        setEnterAge('')
    } 

    const errorHandler= () => {
        setShowError(null)    
    }
  return ( 
    <>
        {showError && <Error errorHandler={errorHandler} title={showError.title} message={showError.message} />}
        <div className='form'> 
            <div className='user-style'>
                <label>Username</label> 
                <input
                    placeholder='Pleae enter your username...'
                    type="text" 
                    value={enterInput} 
                    onChange={changeInput}
                /> 
            </div> 
            <div className='age-style'>
                <label>Age</label> 
                <input
                    placeholder='Pleae enter your age...'
                    type='number' 
                    value={enterAge} 
                    onChange={changeAge}
                />
            </div> 
            <div className='btn'>
                <button 
                    onClick={handleClick} 
                > 
                    Add User
                </button>
            </div>
        </div> 
    </>    
  )
}

export default Form

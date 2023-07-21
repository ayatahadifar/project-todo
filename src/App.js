import { useState } from 'react';
import './App.css'; 
import Form from './components/Form'; 
import FormList from './components/FormList'; 
const App = () => {
  const [enterInput,setEnterInput] = useState('')  
  const [enterAge,setEnterAge] = useState('') 
  const [data,setData] = useState([]) 
  const [showError,setShowError] = useState() 
  
  
  return (
    <div>
      <Form 
        enterInput={enterInput}  
        setEnterInput={setEnterInput}  
        enterAge={enterAge} 
        setEnterAge={setEnterAge} 
        data={data} 
        setData={setData} 
        showError={showError} 
        setShowError={setShowError}
      />  
      <FormList 
        data={data}  
        enterInput={enterInput} 
        enterAge={enterAge}  
      />  
      

    </div>
  );
};

export default App;

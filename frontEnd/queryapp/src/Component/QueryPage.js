import React, { useState } from 'react';
import './Querypage.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [data,setData] = useState([]);
  const [inputData, setInputData] = useState([]);

  const navigate = useNavigate();

  const postData = () => {
    const apiUrl = 'http://localhost:5000/post';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data : inputData }),
    })
    .then(response => response.json())
    .then(data => {
      setData(data);
      console.log(data);
      alert('data has been posted');
    })
    .catch(error => { 
          console.log(error);
    });
  };

 

  console.log(inputData);
  return (
    <div>
      <form>
        <label htmlFor="inputData">Your Query : </label>
        <input
          type="text"
          id="inputData"
          value={inputData}
          className='query-input'
          onChange={(e) => setInputData(e.target.value)}
          required
        />
        <button type="button" className='btn' onClick={postData}>Submit</button>
      </form>
    <div className='btns'>
      <button type="button" className='btn' onClick={()=> navigate('/firstUrl')}> { data[0]}</button>
      <button type="button" className='btn' onClick={()=> navigate('/secUrl')}> { data[1]}</button>
      <button type="button" className='btn' onClick={()=> navigate('/thirdUrl')}> { data[2]}</button>
      <button type="button" className='btn' onClick={()=> navigate('/forthUrl')}> { data[3]}</button>
      <button type="button" className='btn' onClick={()=> navigate('/fifthUrl')}> { data[4]}</button>
    </div>
         
    </div>
  );
};

export default App;

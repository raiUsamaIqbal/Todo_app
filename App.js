
import './App.css';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Slices/counter/counterSlice';
import OurTodo from './Components/OurTodo';
import {fetchTodosApi} from "./Slices/counter/ApiCallingSlice"  // action dispatch from apicallingSlice 

function App() {
  const state = useSelector((state) => state)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

 
  const dispatch = useDispatch();

  if (state.fetchTodos.isLoading) {
    return <h3>Loading......</h3>
  }

  

  return (
    <div className="App">
      <header className="App-header py-3">

      <h3>
        count is  {state.counter.count} <br/> <br/>
        <button className='me-2 p-2 rounded bg-danger text-white border-0 btn btn-lg' onClick={() => dispatch(increment())}>increment</button>
        <button className=' p-2 rounded bg-danger text-white border-0 btn btn-lg' onClick={() => dispatch(decrement())}>decrement</button> {/* Dispatch decrement action */}
      </h3>
       <Home/>
      </header>
      <OurTodo/>




       
      <button className='my-5 p-2 rounded bg-danger text-white border-0 btn btn-lg'  onClick={e =>dispatch(fetchTodosApi())}>Fetch Todo</button>
      {
        state.fetchTodos.data && state.fetchTodos.data.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))
      }

      


<h1>List of Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import { database } from '../../../config';
import TodoItem from './TodoItem';

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState('');

  let todoRef = database.ref('/todos');
  
  let addTask = (task) => {
  database.ref('/todos').push({
    todo: task,
    completed: false
    })
  }

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    event.target.reset();
  }

  useEffect(() => {
    todoRef.on('value', snapshot => {
      let data = snapshot.val();
      if (data === null){
        setAllTasks([])
      } else {
        let values = Object.values(data);
        let keys = Object.keys(data);
        for (var i = 0; i < values.length; i++){
          values[i]['key'] = keys[i];
        }
        setAllTasks(values)
      }
    })
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add New Todo" onChange={handleChange}></input>
        <button>Submit</button>
      </form>

      {allTasks.length !== null ? 
        ( <TodoItem tasks={allTasks}/> ) : (<div>No todos!</div>)
      }

    </div>
  )
}
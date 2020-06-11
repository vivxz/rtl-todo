import React from 'react';
import { database } from '../../../config';
import {GiPig} from 'react-icons/gi'
import {FiTrash2} from 'react-icons/fi'

export default function TodoItem(props) {

  let updateTask = (key) => {
    database.ref(`/todos/${key}`).update({todo: 'cow'});
  }

  let deleteTask = (key) => {
    database.ref(`/todos/${key}`).remove();
  }
  
  return (
    <div>
      {props.tasks.map((task, index) => {
        return (
          <div>
            <div key={index}>
              <span onClick={() => updateTask(task.key)}>{task.todo}</span>
              <button onClick={() => deleteTask(task.key)}><FiTrash2 /></button>
            </div>
          </div>
          )
      })}
    </div>
  )
}
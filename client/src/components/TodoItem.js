import React from 'react';
import { database } from '../../../config';
import {GiPig} from 'react-icons/gi'

export default function TodoItem(props) {
  let updateTask = (key) => {
    database.ref(`/todos/${key}`).update({todo: 'pig'});
  }

  // let deleteTask = (key) => {
  //   database.ref(`/todos/${key}`).remove();
  // }
  
  return (
    <div>
      {props.tasks.map((task, index) => {
        return (
          <div>
            <div onClick={() => {deleteTask(task.key)}} key={index}>{task.todo}
            <button onClick={() => updateTask(task.key)}  key={index}><GiPig /></button> </div>
          </div>
          )
      })}
    </div>
  )
}
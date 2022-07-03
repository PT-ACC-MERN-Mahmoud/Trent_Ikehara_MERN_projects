import './App.css';
import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  function add(e) {
    e.preventDefault();

    if(input === '') return;

    setList([...list, {
      text: input,
      completed: false
    }]);

    setInput('');
  }

  function remove(index) {
    setList(list.filter((_item, i) => i !== index));
  }

  function Marked(index) {
    const task = {
      ...list[index]
    };

    task.completed = !task.completed;

    setList([
      ...list.slice(0, index),
      task
    ].concat(list.slice(index + 1)));
  }

  return (
    <div className='App'>
      <form onSubmit={add}>
        <input
          onChange={e => setInput(e.target.value)}
          value={input}
        />
        <button>Add</button>
      </form>
      {list.map((item, i) => (
        <div key={i}>
          <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
          <input
            type="checkbox"
            checked={item.completed}
            onClick={() => Marked(i)}
            readOnly
          />
          <button onClick={() => remove(i)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Form;
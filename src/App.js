import { useState } from 'react';
import Todo from './Todo';
import TodoForm  from './TodoForm';
import Сounters from './counter';

function App() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)
  const addInput = (value) => {
  setCount(value)
  }

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {

    setTodos([...todos.filter((todo) => todo.id !==id)])

  }

  const hendlToggle = () => {
    //setTodos([
    //  ...todos.map((todo) => {

    //  })
   // ])
  }
  return (
    <div className="App">
     <header>
       <h1> Task length {todos.length }</h1>
     </header>
     <Сounters addInput={addInput} />
     <TodoForm addTask={addTask} count={count} count2={2}/>
     {todos.map((todo) => {
       return (
         <Todo
         todo={todo}
         key={todo.id}
         toggleTask={hendlToggle}
         removeTask={removeTask}
         />
       )
     })}
    </div>
  );
}

export default App;

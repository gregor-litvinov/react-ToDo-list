import { useState } from 'react';
import Todo from './Todo';
import TodoForm  from './TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = () => {

  }

  const hendlToggle = () => {

  }
  return (
    <div className="App">
     <header>
       <h1> Task length {todos.length }</h1>
     </header>
     <TodoForm addTask={addTask}/>
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

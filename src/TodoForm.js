import {useState} from 'react'

function TodoForm({addTask, count}) {
  // const addTask = propsi.addTask
  // const count = propsi.count
// const {addTask, count} = propsi
  const [userInput, setUserInput] = useState('')

  const hendleSubmit = (e) => {
    e.preventDefault()

    addTask(userInput)
    setUserInput('')
    }
    const hendleChange = (e) => {
      setUserInput(e.currentTarget.value)
    }

    const hendleKeyPress = (e) => {
      if(e.key === 'Enter') {
        hendleSubmit(e)
      }
    }
  return (

    <form onSubmit={hendleSubmit}>
      <input
    value={count}
    type='text'
    onChange={hendleChange}
    onKeyDown={hendleKeyPress}
    placeholder='enter value...'
      />
      <button>save</button>
    </form>
  )
}


export default TodoForm;
import {useState} from 'react'

function TodoForm({addTask}) {
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
    value={userInput}
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
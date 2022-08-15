import { useState } from "react"


function Сounters ({addInput}) {
  const [state, setState]  = useState(0)

  const incriment = () =>{
    addInput(state + 1)
    setState(state + 1)

  }

    const decriment = () =>{
      setState(state - 1)
  }
  return (<div>
    counter
  {state}
  <button onClick={incriment}>+</button>
  <button onClick={decriment}>-</button>
</div>)
}


export default Сounters
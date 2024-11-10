import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import CountComp from './component/counter'
import Handler from './component/handler'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      
      <h1>Redux State Management App</h1>
      <div className="card">
        {/* <button onClick={() => dispatch(increment())}>plus +</button>
          &nbsp;count is {count}
          &nbsp;<button onClick={() => dispatch(decrement())}>minus -</button> */}
          {/* </button> */}
          <div className="comp-1">
            <CountComp />
          </div>
          <div className="comp-1">

            <Handler />
          </div>
      </div>
      
    </>
  )
}

export default App

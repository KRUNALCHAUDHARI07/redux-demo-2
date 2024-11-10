import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'
function counter() {
    const count = useSelector((state) => state.counter.value)
    return (
    <div>
      <h3>Counter Component</h3>
      your state counter is <span className='text'>{count}</span>
    </div>
  )
}

export default counter

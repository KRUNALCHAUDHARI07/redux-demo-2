import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  increment,decrement } from '../redux/counter/counterSlice'
import './style.css'
function Handler() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    const addition = () => {
        dispatch(increment())
    }
    const  subtract= () => {
        if(count > 0){
            dispatch(decrement())
        }
    }
    return (
    <div>
      <h3>Handler Component</h3>
      <button onClick={addition}>plus +</button>
      <button onClick={subtract}>minus -</button>
    </div>
  )
}

export default Handler

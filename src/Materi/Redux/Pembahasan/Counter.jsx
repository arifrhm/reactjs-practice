import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWithChekingAction, increment } from '../../../App/Features/Counter/actions';


export const Counter = () => {
  let {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();


  return (
    <div>
        <button onClick={() => dispatch(decrementWithChekingAction(1))}>-</button>
        {' '} <span>{count}</span> {' '}
        <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  )
}

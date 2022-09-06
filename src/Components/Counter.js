import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { decrement, increment, incrementByAmount } from '../features/counter'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
            <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>
        <input
        
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
            <button aria-label="Increment value"
            
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
                Add amount
            </button>
        </div>
      </div>
    </div>
  )
}
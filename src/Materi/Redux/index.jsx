import React from 'react'
import store from '../../app/store'
import { Counter } from './Pembahasan/Counter'
import { Provider } from 'react-redux'

export const Redux = () => {
  return (
    <div>
        <Provider store={store}>
            <Counter/>
        </Provider>        
    </div>
  )
}

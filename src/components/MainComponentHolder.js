
import React from 'react'
import { Contents } from './Contents'
import Header from './Header'

export const MainComponentHolder = () => {
  return (
    <div>
    <div className='contents'>
       <Header />
       <Contents />
     </div>
    </div>
  )
}

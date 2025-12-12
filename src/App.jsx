import { useState } from 'react'
import './App.css'
import Signin from './assets/Component/common/Signin'
import Signup from './assets/Component/common/Signup'

function App() {

  return (
    <div className='mx-auto w-full flex lg:flex-row flex-col gap-10 items-center  lg:justify-between lg:items-center'>
     <Signin/>
     <Signup/>
    </div>
  )
}

export default App

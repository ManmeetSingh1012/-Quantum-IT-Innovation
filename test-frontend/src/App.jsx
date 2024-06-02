import { useState } from 'react'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Outlet />
    </div>
  )
}

export default App

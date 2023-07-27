import React,{ useState } from 'react'
import ErrorPage from './pages/errorPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ErrorPage />
        </div>
    </>
  )
}

export default App

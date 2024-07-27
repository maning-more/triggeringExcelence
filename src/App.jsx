import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import { Route,Routes } from 'react-router-dom'
import { routes } from './assets/components/routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        {routes.map(({ route, component: Component }) => {
          return <Route key={route} path={route} element={<Component />} />;
        })}
        
      </Routes>
   
    </>
  )
}

export default App

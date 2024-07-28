
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { routes } from './assets/components/routes/routes'

function App() {

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

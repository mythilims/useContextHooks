
import './App.css'
import Login from './Com/Login'
import Das from './Com/Das'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './Context/AuthProvider'

function App() {

  return (
    <>
      <div>
      <Router>

      <AuthProvider>
          <Routes>
            <Route path='/' element={<> <Login /></>}/>
            <Route path='/das' element={<>  <Das /></>}/>
            </Routes>
           </AuthProvider>
           </Router>

      </div>
      
    </>
  )
}

export default App



import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import AIComposer from './Pages/AIComposer'
import Schedule from './Pages/Scheduler'
import Accounts from './Pages/Accounts'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/login' element = {<Login/>}/>

        <Route element={<Layout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/ai-composer' element={<AIComposer/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App

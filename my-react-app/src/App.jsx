import './styles/main.scss'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/:category' element={<Layout />}/>
    </Routes>
    </>
  )
}

export default App


import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}

export default App


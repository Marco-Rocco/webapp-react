import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>home page</div>} />
          <Route path='/movies' element={<div>movies list</div>} />
          <Route path='/movies/:id' element={<div>movie details</div>} />
          <Route path='*' element={<div>404</div>} />
          <Route path='about' element={<div>chi siamo</div>} />
          <Route path='contacts' element={<div>contatti</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

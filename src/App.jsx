import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import MoviesList from './pages/MoviesList'
import MoviesDetails from './pages/MoviesDetails'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<div>homepage</div>} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/movies/:id" element={<MoviesDetails />} />

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App



// <Route element={DefaultLayout} />
//         <Route path="/" element={<div>homepage</div>} />
//         <Route path="/movies" element={<MoviesList />} />
//         <Route path="/movies/:id" element={<div>moviesss</div>} />
//       </Route>
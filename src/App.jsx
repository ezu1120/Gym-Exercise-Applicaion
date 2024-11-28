import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/exercise/:id' element={<ExerciseDetail/> } />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App

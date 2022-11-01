import { Box, LinearProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const loading = useSelector((state) => state.workout.loading)
  return (
    <header>
      {loading &&
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
      <div className='container'>
        <Link to='/'>
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar

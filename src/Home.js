import React, { useEffect, useState } from 'react'
import WorkoutDetails from './components/WorkoutDetails'
import WorkoutForm from './components/WorkoutForm'
import { useDispatch, useSelector } from 'react-redux'
import { getWorkout } from './workout/workoutAction'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'


const Home = () => {
  const [workouts, setWorkouts] = useState([])
  const dispatch = useDispatch()
  const data = useSelector((state) => state.workout.workout)
  const loading = useSelector((state) => state.workout.loading)
  useEffect(() => {
    const fetchAllWorkout = async () => {
      dispatch(getWorkout)
    }
    fetchAllWorkout()
  }, [dispatch])

  useEffect(() => setWorkouts(data), [data])
  return (
    <div className='home'>
      <div className='workouts'>
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home

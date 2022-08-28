import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWorkout } from '../workout/workoutAction'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let errorString = ''
    const workout = { title, load, reps }
    if (title === '') {
      errorString = 'Enter Title '
    } else if (load === '') {
      errorString = 'Enter Load'
    } else if (reps === '') {
      errorString = 'Enter Reps'
    }

    if (errorString !== '') {
      setError(errorString)
      setTimeout(() => setError(null), 2000)
    } else {
      setTitle('')
      setLoad('')
      setReps('')
      dispatch(addWorkout(workout))
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>
      <label htmlFor=''>Exercise Title</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor=''>Exercise Load (in kg)</label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label htmlFor=''>Exercise Reps</label>
      <input
        type='number'
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm

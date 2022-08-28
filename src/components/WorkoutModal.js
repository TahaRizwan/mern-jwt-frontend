import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { editWorkout } from '../workout/workoutAction'

const WorkoutModal = ({ workout, modalIsOpen, closeModal }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(workout.title)
  const [load, setLoad] = useState(workout.load)
  const [reps, setReps] = useState(workout.reps)
  const [error, setError] = useState(null)

  const customStyles = {
    content: {
      width: '500px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  Modal.setAppElement('#root')

  const handleEdit = async (e) => {
    e.preventDefault()
    let errorString = ''
    const workoutUpdate = { title, load, reps }
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
      dispatch(editWorkout(workoutUpdate, workout._id))
      closeModal()  
    }
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        <h3>Edit Workout</h3>
        <button style={{height:'30px'}} onClick={closeModal}>X</button>
      </div>
      <form className='create' onSubmit={handleEdit}>
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
        <button>Edit Workout</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </Modal>
  )
}

export default WorkoutModal

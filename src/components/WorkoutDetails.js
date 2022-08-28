import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWorkout } from '../workout/workoutAction'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Swal from 'sweetalert2'
import WorkoutModal from './WorkoutModal'

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch()
  const handleClick = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        dispatch(deleteWorkout(id))
      }
    })
  }
  function openModal() {
    setIsOpen(true)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>

      <div
        style={{
          position: 'relative',
        }}
      >
        <span
          className='material-symbols-outlined'
          style={{ position: 'absolute', right: 0, top: -100 }}
          onClick={(e) => handleClick(workout._id)}
        >
          Delete
        </span>
        <span
          className='material-symbols-outlined'
          style={{ position: 'absolute', right: 0, top: -30 }}
          onClick={openModal}
        >
          Edit
        </span>
      </div>
      <div>
        <WorkoutModal
          workout={workout}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  )
}

export default WorkoutDetails

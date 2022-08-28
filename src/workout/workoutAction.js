import axios from 'axios'
import {
  ERROR,
  GET_WORKOUTS,
  LOADING_FINISHED,
  LOADING_STARTED,
} from './workoutTypes'

export const getWorkout = async (dispatch) => {
  dispatch({ type: LOADING_STARTED })
  const response = await axios.get(
    'https://mern-jwt-app.herokuapp.com/api/workouts'
  )
  if (response.status === 200) {
    const data = response.data
    dispatch({ type: LOADING_FINISHED })
    return dispatch({ type: GET_WORKOUTS, payload: data })
  }
}

export const addWorkout = (value) => async (dispatch) => {
  const response = await axios.post(
    'https://mern-jwt-app.herokuapp.com/api/workouts',
    value
  )
  if (response?.data?.error) {
    const data = response.data
    dispatch({ type: ERROR, payload: data })
  }
  if (response.status === 200) {
    getWorkout(dispatch)
  }
}

export const deleteWorkout = (id) => async (dispatch) => {
  const response = await axios.delete(
    `https://mern-jwt-app.herokuapp.com/api/workouts/${id}`
  )
  if (response.status === 200) {
    getWorkout(dispatch)
  }
}

export const editWorkout = (workout, id) => async (dispatch) => {
  const response = await axios.patch(
    `https://mern-jwt-app.herokuapp.com/api/workouts/${id}`,
    workout
  )
  if (response?.data?.error) {
    const data = response.data
    dispatch({ type: ERROR, payload: data })
  }
  if (response.status === 200) {
    getWorkout(dispatch)
  }
}

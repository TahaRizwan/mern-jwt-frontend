import { ERROR, GET_WORKOUTS, LOADING_FINISHED, LOADING_STARTED } from './workoutTypes'

const initialState = {
  workout: [],
  loading: false,
  error: '',
}

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return { workout: action.payload }
    case LOADING_STARTED:
      return { loading: true }
    case LOADING_FINISHED:
      return { loading: false }
    case ERROR:
      return { error: action.payload.error }
    default: 
      return state
  }
}

export default workoutReducer

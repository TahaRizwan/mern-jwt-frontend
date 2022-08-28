import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import workoutReducer from './workout/workoutReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
})

export default rootReducer

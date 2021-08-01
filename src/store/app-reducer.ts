import { combineReducers } from 'redux'
import { userPathReducer } from './user-path'
import { modeReducer } from './mode'
import { areasReducer } from './areas'

export const appReducer = combineReducers({
  userPath: userPathReducer,
  mode: modeReducer,
  areas: areasReducer,
})

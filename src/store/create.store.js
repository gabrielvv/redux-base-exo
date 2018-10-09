/**
 * Configure redux store
 */
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { defaultRootState } from './root'
import thunk from 'redux-thunk'
import { rootReducer } from './root.reducer'

export const store = createStore(
  rootReducer,
  defaultRootState,
  composeWithDevTools(applyMiddleware(thunk)),
)

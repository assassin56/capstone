// import { formVisibleReducer } from './form-visible-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firestore: firestoreReducer
});

export default rootReducer;
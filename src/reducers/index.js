import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//this is application state, it's made of all reducers in reducers map
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

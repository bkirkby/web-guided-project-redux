import { combineReducers } from 'redux';

import { titleReducer } from './titleReducer';
import { membersReducer } from './membersReducer';

export default combineReducers({ titleReducer, membersReducer });
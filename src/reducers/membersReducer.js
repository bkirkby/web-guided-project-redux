import { ADD_NEW_MEMBER } from '../actions';

export const initialValues = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

export const membersReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_NEW_MEMBER: return { ...state, members: [{ name: action.payload, dragonStatus: false }] }
    default: return state;
  }
}
import { ADD_MEMBER } from '../actions';

const initialState = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...members, { name: action.payload, dragonStatus: false }]
      }
    default: return state;
  }
}
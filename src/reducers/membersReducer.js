import { ADD_NEW_MEMBER } from '../actions';

const initialValue = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
};

export const membersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_NEW_MEMBER: return {
      ...state,
      members: [...state.members, { name: action.payload, dragonStatus: false }]
    }
    default: state;
  }
}
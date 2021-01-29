import { ADD_NEW_MEMBER, TOGGLE_DRAGON_STATUS } from '../actions';

export const initialValues = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

export const membersReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_NEW_MEMBER: return {
      ...state,
      members: [
        ...state.members,
        { name: action.payload, dragonStatus: false }
      ]
    }
    case TOGGLE_DRAGON_STATUS: return {
      ...state,
      members: state.members.map(member => {
        if (member.name === action.payload) {
          return {
            ...member,
            dragonStatus: !member.dragonStatus
          }
        }
        return member;
      })
    }
    default: return state;
  }
}
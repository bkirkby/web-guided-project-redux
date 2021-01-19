import { TOGGLE_DRAGON_STATUS } from "../actions/dragonListActions";

const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true, id: 1 },
    { name: "Brandon Harris", dragonStatus: false, id: 2 },
  ],
  anotherProp: {},
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAGON_STATUS:
      return {
        ...state,
        members: state.members.map((member) => {
          if (member.id === action.payload) {
            return {
              ...member,
              dragonStatus: !member.dragonStatus,
            };
          } else {
            return member;
          }
        }),
      };
    default:
      return state;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState)

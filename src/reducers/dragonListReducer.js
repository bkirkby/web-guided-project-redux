const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true, id: 1 },
    { name: "Brandon Harris", dragonStatus: false, id: 2 },
  ],
  anotherProp: {},
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState)

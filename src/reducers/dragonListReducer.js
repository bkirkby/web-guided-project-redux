const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false },
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

const initialState = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}
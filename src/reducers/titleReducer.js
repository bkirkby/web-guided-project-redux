export const initialState = {
  title: "Dragon Member List 🐲",
  editing: false
};

export const titleReducer = (state, action) => {
  console.log("bk: titlereducer.js: titleReducer: state,action: ", state, axtion)
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    // NEW CASE HERE
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};

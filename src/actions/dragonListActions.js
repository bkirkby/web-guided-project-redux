// Action Suite (not an industry term)
// action objects (actions) => pieces of data that tell the reducer how to update state
// action creator => function that returns an action object (invoked inside components)
// action types => Save action types to a variable to avoid spelling errors

//action type:
export const TOGGLE_DRAGON_STATUS = "TOGGLE_DRAGON_STATUS";
// action creator
export const toggleDragonStatus = (memberId) => {
  return { type: TOGGLE_DRAGON_STATUS, payload: memberId }; // action object
};

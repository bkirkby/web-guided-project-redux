export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const ADD_MEMBER = 'ADD_MEMBER';

export const toggleEditing = () => {
  return { type: TOGGLE_EDITING }
}

export const updateTitle = newTitle => {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}

export const addMember = newMemberName => {
  return {
    type: ADD_MEMBER,
    payload: newMemberName
  }
}
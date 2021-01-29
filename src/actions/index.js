export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE';

export const toggleEditing = () => {
  return {
    type: TOGGLE_EDITING
  }
};

export const updateTitle = () => {
  return {
    type: UPDATE_TITLE
  }
}
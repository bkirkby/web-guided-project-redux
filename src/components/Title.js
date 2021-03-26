import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import { initialState, titleReducer } from '../reducers/titleReducer';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
          ><button>edit</button></i>
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: 'UPDATE_TITLE', payload: newTitleText })
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing,
    title: state.title
  }
}



export default connect(mapStateToProps, {})(Title);

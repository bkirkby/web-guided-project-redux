import React from "react";
import { connect } from "react-redux";

import { toggleDragonStatus } from "../actions/dragonListActions";

// STEP 2: connect a component to the Redux store
// import connect - HOC (Higher order component)

class DragonList extends React.Component {
  state = {
    newMember: "", // component state -> do not add to redux
  };

  handleChanges = (e) => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    console.log("**************", this.props);
    return (
      <>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index} onClick={this.props.toggleDragonStatus}>
              {member.name}
              {member.dragonStatus && <p>🐉</p>}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button>Add member</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // we now have access to the WHOLE redux store!

  // you can do any JS stuff here
  const memberCount = state.members.length;
  return {
    areYouThere: true, // we can add anything to props from right here
    members: state.members, // we can add something to props from the Redux store
    memberCount: memberCount,
  };
};

// use connect() HOC
export default connect(mapStateToProps, { toggleDragonStatus })(DragonList); // connect() => function ; connect()() => function currying

/***** Connect Wizardry 🧙‍♂️ *****/
/**
 *
 *  first call:
 *    two args
 *    - function that will map the state from Redux to the component
 *        - the function is called by "connect" and is passed the state obj
 *        - the function will return an object. that object's properties will be added to the connected component's props
 *        - usually defined outside of connect and passed in
 *    - object takes in any action creator function we need and pass it to the component's props
 *        - connect, uTH, takes the action creator and wraps the dispatch function around the action creator invocation:
 *
 *  second call takes component as an argument so it can be connected to the store
 *
 *
 *  Connect function, under the hood, calls `store.getState()`
 *
 *  const connect = (mapFn, obj) => {
 *    mapFn(store.getState())
 *
 *    store.dispatch({ type: TOGGLE_DRAGON_STATUS })
 *  }
 *
 *
 *  Connect handles dispatching actions
 *
 */

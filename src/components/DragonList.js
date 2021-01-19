import React from "react";
import { connect } from "react-redux";

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
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // we now have access to the WHOLE redux store!
  return {
    areYouThere: true,
    members: state.members,
  };
};

// use connect() HOC
export default connect(mapStateToProps, {})(DragonList); // connect() => function ; connect()() => function currying

/***** Connect Wizardry 🧙‍♂️ *****/
/**
 *
 *  first call:
 *    two args
 *    - function that will map the state from Redux to the component
 *        - the function is called by "connect" and is passed the state obj
 *        - the function will return an object. that object's properties will be added to the connected component's props
 *        - usually defined outside of connect and passed in
 *    - object
 *
 *  second call takes component as an argument so it can be connected to the store
 *
 *
 *  Connect function, under the hood, calls `store.getState()`
 *
 *  const connect = (mapFn, obj) => {
 *    mapFn(store.getState())
 *  }
 *
 *
 */

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
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.state.members.map((member, index) => (
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
      </React.Fragment>
    );
  }
}

// use connect() HOC
export default connect(DragonList);

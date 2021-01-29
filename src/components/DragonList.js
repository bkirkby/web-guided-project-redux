import React from 'react';
import { connect } from 'react-redux';

import { addNewMember } from '../actions';

class DragonList extends React.Component {
  state = {
    newMember: '',
    members: [
      { name: 'Jojo Zhang', dragonStatus: true },
      { name: 'Brandon Harris', dragonStatus: false }
    ]
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon">🐲</i>}
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

const mapStateToProps = state => {
  return {
    members: state.members
  }
}

export default connect(mapStateToProps, { addNewMember })(DragonList);

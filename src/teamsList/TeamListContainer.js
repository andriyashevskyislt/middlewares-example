import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "./actions";
import { teamsListContainerSelector } from "./selector";

class TeamListContainer extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(fetchTeams());
  };
  render() {
    const { isLoading, teams } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>load teams</button>
        {isLoading ? (
          <div>Spinner</div>
        ) : (
          <ul>
            {teams.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return teamsListContainerSelector(state);
}

export default connect(mapStateToProps)(TeamListContainer);

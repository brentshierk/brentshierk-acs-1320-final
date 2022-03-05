import React from "react";
import ReactDOM from "react-dom";
import "./Vote.css";

class Vote extends React.Component {

  state = { vote: 0, score: 0 };

  
  vote(type) {
    this.setState(state => ({
      vote: state.vote === type ? 0 : type
    }));
  }

  // How the UI should look based on the state.
  render() {
    const { vote, score } = this.state;
    return (
      <main>
        <h1>{score + vote}</h1>
        <button
          id="like"
          className={vote === 1 ? "active" : undefined}
          onClick={() => this.vote(1)}
        >
          like
        </button>
        <button
          id="dislike"
          className={vote === -1 ? "active" : undefined}
          onClick={() => this.vote(-1)}
        >
          dislike
        </button>
      </main>
    );
  }
}

export default Vote;
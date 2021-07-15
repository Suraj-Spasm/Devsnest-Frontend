import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter1: 0,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="btns">
          <button
            onClick={() => {
              this.setState({ counter1: this.state.counter1 + 1 });
            }}
          >
            {this.state.counter1}
          </button>
        </div>
      </div>
    );
  }
}

export default App;

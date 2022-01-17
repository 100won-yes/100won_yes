import React, {Component} from 'react';


class App extends Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div className="props">
          {/* Props가 들어가는 부분 */}
          <span>{this.props.message}</span>
        </div>
        <div className="state">
          {/* State가 들어가는 부분 */}
          {this.state.count}
          <button onClick={this.countUp}>click me!</button>
        </div>
      </div>
    );
  }
}

export default App;

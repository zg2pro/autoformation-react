import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Java programmer Interview questions search engine</h2>
        </div>
          <p className="App-intro">
              Your search:
              <input value={this.keywords(window.location.search.substring(1)).join(" ")} />
              <button>Search</button>
          </p>
          <p>
              Results:<br/><br/>
              Question 1<br/>
              Answer 1<br/><br/>
              Question 2<br/>
              Answer 2
          </p>
      </div>
    );
  }

  keywords(str: string){
      return str.split('=')[1].split('+');
  }

}

export default App;

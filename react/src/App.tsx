import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {value: this.keywords(window.location.search.substring(1)).join(' ')};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to the Java programmer Interview questions search engine</h2>
                    </div>
                    <p className="App-intro">
                        Your search:
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="q" />
                        <input type="submit" value="Search"/>
                    </p>
                    <p className="left">
                        Results:<br/><br/>
                        Question 1<br/>
                        Answer 1<br/><br/>
                        Question 2<br/>
                        Answer 2
                    </p>
                </div>
            </form>
        );
    }

    keywords(str: string) {
        if (str === undefined) {
            return [''];
        }
        if (str.indexOf('=') > -1) {
            str = str.split('=')[1];
        }
        if (str.indexOf('+') > -1) {
            return str.split('+');
        }
        return [str];
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any) {
        event.target.value = event.target.value.replace(' ', '+');
    }

}

export default App;

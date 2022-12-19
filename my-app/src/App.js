import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      'teams': [
        {
        'id': 0,
        'name': 'seahawks'
        },
        {
        'id': 1,
        'name': 'chiefs'
        },
        {
        'id': 2,
        'name': 'dolphins'
        }
    ]
    }
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        {this.state['teams'].map((team) => {
          return (
            <div key={team['id']}>
              <h1>{team['name']}</h1>
            </div> 
          )
        })}
      </div>
    );
  }
}

export default App;

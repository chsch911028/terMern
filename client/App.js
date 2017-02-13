/**
 * Root Component
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';

// import './App.css';
import Article from './components/article'
import Newarti from './components/Newarti'
import Login from './login/login'
import Butt from './components/button.svg'
import Back from './components/back.svg'

// Import Routes
// import routes from './routes';

// Base stylesheet
require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'article',
      result: true,
      auth: false
    };
  }

  changeauth(){
    this.setState({
      auth: !this.state.auth
    });
  }

  changepage(){
    if ( this.state.page === 'write') {
      this.setState({
        page: 'article',
        result: true
      })
    } else if ( this.state.page === 'article' ) {
      this.setState({
        page: 'write',
        result: false
      })
    }
    
  }

  render() {
    return (
      <div>
      { this.state.auth && 
        <div className="App">
        <header>
        <div className="App-header">
        </div>
        <button>Broadcast</button>
        <button>Room</button>
        </header>
        {this.state.result && <Article changepage={this.changepage.bind(this)} />}
        {!this.state.result && <Newarti changepage={this.changepage.bind(this)} />} 
        </div> 
      }
      { !this.state.auth && <Login auth={this.changeauth.bind(this)}/> }
      </div>
    );
  }
}


export default App;


// export default function App(props) {
//   return (
//     <Provider store={props.store}>
//       <IntlWrapper>
//         <Router history={browserHistory}>
//           {routes}
//         </Router>
//       </IntlWrapper>
//     </Provider>
//   );
// }

// App.propTypes = {
//   store: React.PropTypes.object.isRequired,
// };

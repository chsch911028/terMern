/**
 * Root Component
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';

// import './App.css';
import Article from './components/article'
import Login from './login/login'

// Import Routes
// import routes from './routes';

// Base stylesheet
require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  changeauth(){
    this.setState({
      auth: !this.state.auth
    });
  }



  render() {
    return (
      <Provider store={this.props.store}>
        <div>
        { this.state.auth && 
          <div className="App">
            <header>
              <div className="App-header">
                <button>Broadcast</button>
                <button>Room</button>
              </div>
            </header>
            <Article />
          </div> 
        }
        { !this.state.auth && <Login auth={this.changeauth.bind(this)}/> }
        </div>
      </Provider>
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

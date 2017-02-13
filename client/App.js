/**
 * Root Component
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Article from './components/article'
import Kakao from './components/Kakao'
import kakaopay from './lib/kakaopay'
import Login from './login/login'
import Broadcast from './components/Broadcast'
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Button from 'muicss/lib/react/button';

// Import Routes
// import routes from './routes';
// import './App.css';
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
    let style = {backgroundColor:'#fdd835'};
    return (
      <Provider store={this.props.store}>
      <div>
      { this.state.auth && 
        <div className="App">
        <header>
        <div className="App-header">
        
        <Button variant="raised" style={style}>Broadcast</Button>
        <Button variant="raised" style={style}>Room</Button>
        </div>
        <MuiThemeProvider>
            <AppBar
              title="TER"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              style={{'backgroundColor':'#fdd835'}}
            />
        </MuiThemeProvider>
        </header>
        {<Article />}
        <Broadcast></Broadcast>
        <div>
        <Kakao kakaopay={kakaopay} />
        </div>
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

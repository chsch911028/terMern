import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }
  handleClick(){
     var videoStream = null;
     var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};
     var video = document.getElementById("video");
     navigator.getUserMedia({
            video: true,
            audio: true
          },
          function(stream) {
            videoStream = stream;
            // Stream the data
            video.src = createSrc(stream);
            video.play();
          },
          function(error) {
            console.log("Video capture error: ", error.code);
    });
  }
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line


   // start camera!

    // var myConstraints = { audio: true, video: true };
    // navigator.mediaDevices.getUserMedia(myConstraints).then(function(mediaStream) {
    //    use the stream 
    //   console.log('done')
    // }).catch(function(err) {
    //   /* handle the error */
    //   console.log('error!')
    // });
  var videoStream = null;
      var video = document.getElementById("video");

      // Test browser support
      window.navigator = window.navigator || {};
      navigator.getUserMedia = navigator.getUserMedia       ||
                               navigator.webkitGetUserMedia ||
                               navigator.mozGetUserMedia    ||
                               null;

      if (navigator.getUserMedia === null) {
        document.getElementById('gum-unsupported').classList.remove('hidden');
        document.getElementById('button-play-gum').setAttribute('disabled', 'disabled');
        document.getElementById('button-stop-gum').setAttribute('disabled', 'disabled');
      } else {
        // Opera <= 12.16 accepts the direct stream.
        // More on this here: http://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/
        var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};

        // Opera <= 12.16 support video only.
        var audioContext = window.AudioContext       ||
                           window.webkitAudioContext ||
                           null;
        if (audioContext === null) {
          document.getElementById('gum-partially-supported').classList.remove('hidden');
        }

        document.getElementById('button-play-gum').addEventListener('click', function() {
          // Capture user's audio and video source
          console.log('asd')
          navigator.getUserMedia({
            video: true,
            audio: true
          },
          function(stream) {
            videoStream = stream;
            // Stream the data
            video.src = createSrc(stream);
            video.play();
          },
          function(error) {
            console.log("Video capture error: ", error.code);
          });
        });
        document.getElementById('button-stop-gum').addEventListener('click', function() {
          // Pause the video
          video.pause();
          // Stop the stream
          videoStream.stop();
        });
      }

    // if (hasGetUserMedia()) {
    //   // Good to go!
    //   console.log(navigator.getUserMedia({video: {
    //     mandatory: {
    //       maxWidth: 640,
    //       maxHeight: 360
    //     }
    //   }, audio: true
    //     },
    //     function(localMediaStream) {
    //       var video = document.querySelector('video');
    //       video.src = window.URL.createObjectURL(localMediaStream);

    //       // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    //       // See crbug.com/110938.
    //       video.onloadedmetadata = function(e) {
    //         // Ready to go. Do some stuff.
    //       }
    //   },errorCallback))
    // } else {
    //   alert('getUserMedia() is not supported in your browser');
    // }


  }

  //end camera

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div>
          THIS IS VIDEO
            <video id="video" autoPlay="true" controls="true"></video>
            <div className="buttons-wrapper">
              <button id="button-play-gum" className="button-demo" onClick={this.handleClick} href="#">Play demo</button>
              <button id="button-stop-gum" className="button-demo" href="#">Stop demo</button>
            </div>
            <span id="gum-unsupported" className="hidden">API not supported</span>
            <span id="gum-partially-supported" className="hidden">API partially supported (video only)</span>
          </div>
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);

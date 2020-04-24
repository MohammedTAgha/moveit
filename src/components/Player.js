// import React from 'react';
// import YouTube from 'react-youtube';
 
// class Example extends React.Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
      
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };
 
//     return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//   }
 
//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
// export default Example




// import React from 'react';
// import videojs from 'video.js'

// export default class Player extends React.Component {
//   componentDidMount() {
//     // instantiate Video.js
//     this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
//       console.log('onPlayerReady', this)
//     });
//   }

//   // destroy player on unmount
//   componentWillUnmount() {
//     if (this.player) {
//       this.player.dispose()
//     }
//   }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
//   render() {
//     return (
//       <div>	
//         <div data-vjs-player>
//           <video ref={ node => this.videoNode = node } className="video-js"></video>
//         </div>
//       </div>
//     )
//   }
// }

import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://www.youtube.com/watch?v=LDmj_GOeRMU"
    />
  );
};





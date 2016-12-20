import React from 'react';

export default class Alkali extends React.Component {

  render() {
    // eslint-disable-next-line
    return ( // eslint-disable-next-line
      <div>
        <div id="cesiumContainer"></div>
        <div id="loadingOverlay"><h1>Loading...</h1></div>
      </div>
    );
  }
}


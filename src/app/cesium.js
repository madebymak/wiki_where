import React from 'react';

const cesiumViewerOptions = {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  timeline: false,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
  automaticallyTrackDataSourceClocks: false
};

export default class Alkali extends React.Component {

  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new window.Cesium.Viewer('cesiumContainer', cesiumViewerOptions);
  }

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


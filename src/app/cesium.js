import React from 'react';

const Cesium = window.Cesium;
const cesiumViewerOptions = {
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
};

export default class Alkali extends React.Component {

  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new Cesium.CesiumWidget('cesiumContainer', cesiumViewerOptions);
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


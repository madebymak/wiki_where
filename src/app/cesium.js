import React from 'react';
// import CesiumWidget from 'cesium/Source/Widgets/CesiumWidget/CesiumWidget';
import BuildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
BuildModuleUrl.setBaseUrl('./');
// import CesiumViewer from 'cesium/Source/Widgets/Viewer/Viewer';

export default class Alkali extends React.Component {

  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new window.Cesium.Viewer('cesiumContainer');
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


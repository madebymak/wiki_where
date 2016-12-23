import React from 'react';

const Cesium = window.Cesium;
const cesiumViewerOptions = {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  skyBox: false,
  timeline: false,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
  automaticallyTrackDataSourceClocks: false,
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
};

export default class Alkali extends React.Component {

  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new Cesium.Viewer('cesiumContainer', cesiumViewerOptions);

    const scene = this.viewer.scene;
    scene.screenSpaceCameraController.minimumZoomDistance = 2000.0;
    scene.screenSpaceCameraController.maximumZoomDistance = 30000000.0;

    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

    this.viewer.entities.add(new Cesium.Entity({
      id: 'guess',
      show: false,
      position: Cesium.Cartesian3.fromDegrees(0.0, 0.0),
      point: {
        pixelSize: 10,
        color: Cesium.Color.GREEN,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 5
      },
      label: {
        text: 'Your Guess',
        font: '14pt monospace',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -15)
      }
    }));

    this.viewer.entities.add(new Cesium.Entity({
      id: 'answer',
      show: false,
      position: Cesium.Cartesian3.fromDegrees(this.props.correctAnswerCoords[0], this.props.correctAnswerCoords[1]),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 5
      },
      label: {
        text: 'Answer',
        font: '14pt monospace',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -15)
      }
    }));

    // suppress default double click behaviour
    handler.setInputAction(() => {
      this.viewer.trackedEntity = undefined;
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    handler.setInputAction(click => {
      const position = this.viewer.camera.pickEllipsoid(click.position);
      const cartographicPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
      const longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
      const latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
      const coordinates = [longitude, latitude];
      this.props.setPlayerAnswerCoords(coordinates);
      const guess = this.viewer.entities.getById('guess');
      guess.position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
      guess.show = true;
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  componentDidUpdate() {
    const answer = this.viewer.entities.getById('answer');
    if (this.props.gameState === 'answered') {
      answer.position = Cesium.Cartesian3.fromDegrees(this.props.correctAnswerCoords[0], this.props.correctAnswerCoords[1]);
      answer.show = true;
    } else {
      answer.show = false;
    }
  }

  render() {
    // eslint-disable-next-line
    return ( // eslint-disable-next-line
      <div>
        <div id="cesiumContainer"></div>
      </div>
    );
  }
}

Alkali.propTypes = {
  correctAnswerCoords: React.PropTypes.array.isRequired,
  setPlayerAnswerCoords: React.PropTypes.func.isRequired,
  gameState: React.PropTypes.string.isRequired
};

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);

require('cesium/Source/Widgets/widgets.css');
// const BuildModuleUrl = require('cesium/Source/Core/buildModuleUrl');
// BuildModuleUrl.setBaseUrl('./');

const Viewer = require('cesium/Source/Widgets/Viewer/Viewer');

//eslint-disable-next-line
const viewer = new Viewer('cesiumContainer');

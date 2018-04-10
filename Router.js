import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import ImageController from './components/ImageController.js';
import App from './components/App.js'

export default  props => (
    <Router>
        <Stack key = "root">
            <Scene key = "App" component={App} initial hideNavBar />
            <Scene key = "ImageController" component={ImageController} title='Gallery'/>
        </Stack>
    </Router>
);
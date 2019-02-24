import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import KittenDetails from './components/KittenDetails';
import KittenList from './components/KittenList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene 
                    key = "kittenList" 
                    component = {KittenList} 
                    title = "Kitten List" 
                    initial
                />
                <Scene 
                    key = "kittenDetails"
                    component = {KittenDetails}
                    title = "Kitten Details"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;


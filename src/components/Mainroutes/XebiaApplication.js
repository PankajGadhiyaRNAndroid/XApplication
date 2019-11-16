import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/ConfigureStore';
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';
import Home from '../Home';
import Detail from '../Details';
import DrawerContent from '../Drawer';

//  Store configuration
const store = configureStore();

//  Routes Informations 
const XebiaApp = () => (
    <Router>
        <Stack key="root">
            <Drawer
                hideNavBar
                key="drawer"
                onExit={() => {
                    console.log('Drawer closed');
                }}
                onEnter={() => {
                    console.log('Drawer opened');
                }}
                contentComponent={DrawerContent}
                drawerWidth={300}
            >

                <Scene key="home" component={Home} title="Home" initial />

            </Drawer>
            <Scene key="detail" component={Detail} title="Detail" />
        </Stack>
    </Router>
);

class XebiaApplication extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Provider store={store}>
                <XebiaApp />
            </Provider>
        );
    }
}

export default XebiaApplication;

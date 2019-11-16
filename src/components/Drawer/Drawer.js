import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './StyleDrawer';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    drawerclose = () => {
        // Actions.refresh({ key: 'drawer', open: value => !value });
        Actions.drawerClose();
    }

    render() {
        return (
            <Fragment>
                <View style={styles.container}>

                    <View style={styles.topDrawer}>
                        <TouchableOpacity
                            onPress={this.drawerclose}
                            activeOpacity={0.9}>
                            <Text style={styles.drawerText}>coming soon!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomDrawer}>
                        <TouchableOpacity
                            onPress={this.drawerclose}
                            activeOpacity={0.9}>
                            <Text>coming soon!</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Fragment>
        );
    }
}




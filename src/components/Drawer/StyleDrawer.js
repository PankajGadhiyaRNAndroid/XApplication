import { ifIphoneX } from '../../utils/AppConstants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    drawerText: {
        color: 'white'
    },
    topDrawer: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    bottomDrawer: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15
    }


});

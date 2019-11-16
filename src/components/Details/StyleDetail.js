import { ifIphoneX } from '../../utils/AppConstants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    maincontainer: {
        flex: 1,
    },
    contentcontainer: {
        borderWidth: 1,
        borderColor: 'orange',
        marginTop: 10,
        borderRadius: 6,
        margin: 20,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    roundimage: {
        alignSelf: 'center',
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginTop: 20
    },
    contentlabel: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    contenttextcontainer: {
        color: 'gray',
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center'
    },


});


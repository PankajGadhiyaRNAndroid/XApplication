import { ifIphoneX } from '../../utils/AppConstants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    lineseprator: {
        height: 1,
        width: "100%",
        backgroundColor: "#000",
    },
    roundimage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    claender: {
        width: 15,
        height: 15,
        marginLeft: 20,
        marginRight: 10
    },
    rowbutton: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },
    rowcontainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white'
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10
    },
    titlecontainer: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    abscontainer: {
        color: 'gray',
        marginTop: 10
    },
    datecontainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    datetextcontainer: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        marginLeft: 5,
    },
    date: {
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },
    type: {
        color: 'gray'
    },
    filtercontainer: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray'
    },
    searchinput: {
        marginLeft: 10,
        flex: 1,
        backgroundColor: 'white',
        width: 100,
        height: '100%',
    },
    periodbutton: {
        padding: 10,
        backgroundColor: 'gray',
        marginRight: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    searchtext: { color: 'white' },
  


});


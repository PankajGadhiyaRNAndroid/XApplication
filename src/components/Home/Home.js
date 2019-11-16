import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import styles from './StyleHome';
import { initialHomeRequest, homeRequest } from '../../container/homecontainer/Actions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
const defaultImg = require('../../images/download.png');
const calendar = require('../../images/calendar.png');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingHome: this.props.hLoading,
            successData: this.props.hSuccess,
            errorData: this.props.hFail,
            period: ''
        };
    }


    gotoDetailScreen = (item) => () => {
        Actions.detail({ details: item });
    }

    componentDidMount() {
        console.log("Component did mount");

        this.props.initialHomeRequest(true);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.hLoading !== prevState.loadingHome) {
            return { loadingHome: nextProps.hLoading };
        }
        if (nextProps.hSuccess !== prevState.successData) {
            console.log('newProps :::-> ', nextProps.hSuccess.length);
            return {
                successData: nextProps.hSuccess,
                loadingHome: nextProps.hLoading
            };
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hLoading !== this.state.loadingHome) {

            this.setState({
                hLoading: this.state.hLoading
            }, () => {
                if (this.state.period && this.state.period.length > 0) {
                    this.props.homeRequest(this.state.period);
                } else {
                    this.props.homeRequest("7");
                }
            });
        }

        if (prevProps.hSuccess !== this.state.successData) {
            this.setState({
                successData: this.state.successData,
                loadingHome: this.state.loadingHome
            });
        }
    }

    renderitem = ({ item }) => (

        <TouchableOpacity
            onPress={this.gotoDetailScreen(item)}
            activeOpacity={0.9}
            style={styles.rowbutton}>
            <View style={styles.rowcontainer}>
                <View style={styles.imagecontainer}>
                    <Image
                        style={styles.roundimage}
                        source={defaultImg}
                    />
                </View>

                <View style={styles.contentcontainer}>

                    <Text
                        numberOfLines={2}
                        style={styles.titlecontainer}>{item.title}</Text>

                    <Text
                        numberOfLines={2}
                        style={styles.abscontainer}>{item.abstract}</Text>

                    <View style={styles.datecontainer}>
                        <Text style={styles.type}>{item.type}</Text>

                        <View style={styles.datetextcontainer}>
                            <Image
                                style={styles.claender}
                                source={calendar}
                            />
                            <Text style={styles.date}>{item.published_date}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    keyExtractor = item => item.id;

    renderSeparator = () => {
        return (
            <View style={styles.lineseprator} />
        );
    };

    changeperiod = (value) => {
        this.setState({
            period: value
        })

    }

    getPeriodResultData = () => {

        this.props.initialHomeRequest(true);

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filtercontainer}>
                    <TextInput
                        placeholder='Period'
                        keyboardType={'numeric'}
                        style={styles.searchinput}
                        value={this.state.period}
                        onChangeText={this.changeperiod}
                    />
                    <TouchableOpacity
                        onPress={this.getPeriodResultData}
                        style={styles.periodbutton}
                        activeOpacity={0.9}>
                        <Text style={styles.searchtext}>Period</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.container}>

                    {
                        this.state.loadingHome ?
                            <Spinner
                                visible={this.state.loadingHome}
                                textStyle={styles.spinnerTextStyle}
                            /> : null

                    }

                    {
                        this.state.successData ?
                            <FlatList
                                style={styles.container}
                                data={this.state.successData}
                                renderItem={this.renderitem}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={this.keyExtractor}
                            /> :
                            null
                    }

                </View>

            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        hLoading: state.homescreen.homeRequestLoading,
        hSuccess: state.homescreen.homeSuccessData,
        hFail: state.homescreen.homeError
    };
}

const mapDispatchToProps = { initialHomeRequest, homeRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

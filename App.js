/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
const width = Dimensions.get('window').width;
import FlowLayout from './src/view/FlowView'
const hot_search = ['Eminem', '偷故事的人', '石头计划', '九张机', '心愿便利贴', '退', 'Stay with me', '短发', '相守', 'Havana']
export default class App extends Component<{}> {

    constructor(props) {
        super(props)
        this.state = {
            isSearch: false,
            history_list: [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'red'} animated={true}/>
                {this.state.isSearch ? this.getSearchTitleBar() : this.getTitleBar()}
                {this.getContentView()}
                {this.getSearchHistoryView()}
            </View>
        );
    }

    search() {
        this.setState({isSearch: true})
    }

    getTitleBar() {
        return (<View style={styles.titleBar}>
            <Image source={require('./img/microphone.png')} style={styles.imageStyle}/>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                this.search()
            }}>
                <View style={styles.titleStyle}>
                    <Image source={require('./img/search.png')} style={styles.searchImg}/>
                    <Text style={styles.textStyle}>秘密 很好听哦</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('./img/volume.png')} style={styles.imageStyle}/>
        </View>)
    }

    getSearchTitleBar() {
        return (<View style={styles.titleBar}>
            <View style={styles.inputView}>
                <Image source={require('./img/search.png')} style={styles.searchImg}/>
                <TextInput
                    ref="search"
                    placeholder={'秘密 很好听哦'}
                    placeholderTextColor={'#cccccc'}
                    placeholderTextSize={12}
                    underlineColorAndroid='transparent'
                    autoFocus={true}
                    style={styles.inputStyle}
                />
            </View>
            <TouchableOpacity onPress={() => {
                this.setState({isSearch: false})
            }}>
                <Text style={styles.cancelStyle}>取消</Text>
            </TouchableOpacity>
        </View>)
    }

    getContentView() {
        return (<View>
            <View style={styles.contentTop}>
                <Image source={require('./img/user.png')} style={styles.userImg}/>
                <Text style={styles.topTxt}>歌手分类 ></Text>
            </View>
            <Text style={styles.searchTitleTxt}>热门搜索</Text>
            <FlowLayout multiselect={false} dataValue={hot_search} style={{marginLeft: 10, marginBottom: 20}}/>
        </View>)
    }

    getSearchHistoryView() {
        let list = []
        this.state.history_list.map((value, index) => {
            list.push(
                <View key={index} style={styles.historyItemView}>
                    <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
                        <Image source={require('./img/clock.png')} style={styles.clockImg}/>
                        <Text style={{marginLeft: 5, textAlign: 'center', fontSize: 14}}>{value.name}</Text>
                    </View>
                    <Image source={require('./img/close.png')} style={styles.closeImg}/>
                </View>)
        })
        return list
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5F5'
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        }, titleBar: {
            height: 40,
            width: width,
            backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center'
        }, imageStyle: {
            width: 25,
            height: 25,
            marginTop: 5,
            marginLeft: 10
        },
        titleStyle: {
            height: 30,
            width: width - 80,
            backgroundColor: 'white',
            justifyContent: 'center',
            marginLeft: 5,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center'
        }, searchImg: {
            height: 15,
            width: 15,
            marginLeft: 10
        }, textStyle: {
            color: '#cccccc',
            fontSize: 12,
            marginLeft: 10
        }, cancelStyle: {
            color: 'white',
            fontSize: 16,
            marginLeft: 10
        }, inputView: {
            height: 30,
            width: width - 60,
            backgroundColor: 'white',
            marginLeft: 10,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center'
        }, inputStyle: {
            fontSize: 12,
            height: 40,
            width: width - 80
        }, contentTop: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            backgroundColor: '#FFFFFF'
        }, userImg: {
            width: 15,
            height: 15
        }, topTxt: {
            fontSize: 12,
            marginLeft: 5
        }, searchTitleTxt: {
            fontSize: 10,
            marginTop: 15,
            marginLeft: 5
        }, historyItemView: {
            flexDirection: 'row',
            width: width,
            justifyContent: 'space-between',
            height: 40,
            backgroundColor: '#ffffff',
            paddingRight: 10,
            alignItems: 'center',
            marginBottom: 1
        }, closeImg: {
            width: 15,
            height: 15,
            paddingRight: 10
        }, clockImg: {
            width: 15,
            height: 15
        }

    })
;

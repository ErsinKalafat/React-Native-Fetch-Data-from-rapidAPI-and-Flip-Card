import React from 'react'
import {View, Text, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native'
import CardView from 'react-native-cardview'
import CardFlip from 'react-native-card-flip';

var Styles = require('./style');

export default class App extends React.Component {

    state = {
        isLoading: true,
        data: []
    };

    componentWillMount() {
        fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "sign-up for a key"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataClasses: responseJson.classes,
                    dataRaces: responseJson.races,
                    isLoading: false
                });
            });
    }

    componentDidMount(): void {
    }

    renderData() {
        return (this.state.dataClasses.map((val, key) =>
            <View key={key}>
                <CardFlip style={Styles.card} ref={(card) => this['card' + key] = card}>
                    <TouchableOpacity style={Styles.front} onPress={() => this['card' + key].flip()}>
                        <Text style={Styles.isim}>{val}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.back} onPress={() => this['card' + key].flip()}>
                        <Text>Kart Bilgileri</Text>
                    </TouchableOpacity>
                </CardFlip>
            </View>
        ))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={Styles.baslik}>Justmop Ersin Kalafat</Text>


                    <ScrollView>
                        {this.renderData()}
                    </ScrollView>
                </View>
            );
        }
    }
}
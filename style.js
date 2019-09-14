'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({

    card: {
        padding: 10,
        marginTop: 10,
        height: 400,
        marginLeft: 20,
        marginRight: 20,

    },

    front: {
        height: 400,
        backgroundColor: '#9c0408',
        borderRadius:10
    },

    back : {
        height: 400,
        backgroundColor: '#efafa6',
        borderRadius:10,
        padding:30
    },
    isim: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        padding:5
    },
    baslik: {
        color: '#19778e',
        fontWeight: 'bold',
        fontSize: 20,
        margin:10
    }
});
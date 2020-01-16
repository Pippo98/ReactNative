'use strict';
import type { Node } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const CustomHeader = (): Node => (
    <ImageBackground
        accessibilityRole={'image'}
        source={require('./ic_launcher_round.png')}
        style={styles.background}
        imageStyle={styles.logo}>
        <Text style={styles.text}>Welcome to CookIT</Text>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
        backgroundColor: "#eeeeee",
    },
    logo: {
        opacity: 1,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: 0,
        marginBottom: 0,
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: "#000000",
    },
});

export default CustomHeader;

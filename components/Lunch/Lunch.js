import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
} from "react-native";
import { useState } from "react";

const Lunch = () => {
    return (
        <View style={styles.body}>
              {/* <ImageBackground source={require("../../assets/church1.jpg")}  resizeMode="cover" style={styles.image}> */}
            <View style={styles.layout}>
                <View style={styles.headbox}>
                    <Text style={styles.head}>
                        TRUEVINE
                    </Text>
                </View>
                {/* <View style={styles.bodyBox}>
                </View> */}
             </View>
             {/* </ImageBackground> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    layout:{
        height: 400,
        width: 300,
    },
    headbox: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // bodyBox: {
    //     flex: 4,
    //     width: '100%',
    //     height: '100%',
    // },
    head:{
        fontSize: 30,
        fontWeight: "700",
        marginLeft: '10',
    }
});

export default Lunch

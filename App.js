import { StatusBar } from "expo-status-bar";
import React from "react";
import Lunch from "./components/Lunch/Lunch";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.main}>
        <Lunch />
        
    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    paddingTop: 30,
    width: "100%",
    height: "100%"
  }
});

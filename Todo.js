import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Todo = ({ title }) => {
  return (
    <View >
      <Text style={{fontSize: 24,color: "#EC6337" }}>{title}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Todo = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 56, fontWeight: 600 }}>I'm {title}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({});

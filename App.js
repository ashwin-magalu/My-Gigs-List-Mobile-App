import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Todo from "./components/Todo";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const App = () => {
  const [input, setInput] = useState("");
  //const [todos, setTodos] = useState([]);
  const [num, setNum] = useState("");
  const [gigs, setGigs] = useState([]);
  const [total, setTotal] = useState(0);

  {
    /* const addTodo = () => {
    setTodos([input, ...todos]);
    setInput("");
  }; */
  }

  const addEntry = () => {
    setGigs([
      ...gigs,
      {
        description: input,
        amount: num,
        timestamp: new Date(),
      },
    ]);

    setTotal(total + Number(num));

    setInput("");
    setNum("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scroll}>
        {todos.map((todo) => (
          <Todo title={todo} />
        ))}
      </ScrollView> */}
      <Text
        style={{
          fontSize: 30,
          color: "cadetblue",
          fontWeight: "bold",
          margin: 20,
        }}
      >
        My Gig App
      </Text>
      <TextInput
        style={styles.textInput}
        value={input}
        placeholder="Description"
        onChangeText={(text) => setInput(text)}
        autoFocus
      />
      <TextInput
        style={styles.textInput}
        value={num}
        placeholder="Amount"
        keyboardType="numbers-and-punctuation"
        onChangeText={(no) => setNum(no)}
      />
      <TouchableOpacity>
        {/* <Button title="Set Todos" style={styles.button} onPress={addTodo} /> */}
        <Button
          title="Add to Entry"
          style={styles.button}
          onPress={addEntry}
          disabled={!num && !input}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
        Total Income: ₹{total}/-
      </Text>
      <View style={{ width: Dimensions.get("window").width }}>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          My Gig Chart
        </Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel={"₹"}
          yAxisSuffix={"k"}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#818181",
            backgroundGradientTo: "cadetblue",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <ScrollView>
        {gigs.map((gig) => (
          <View>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {gig.description}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {gig.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#f8f8f8",
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    borderColor: "green",
    margin: 10,
  },
});

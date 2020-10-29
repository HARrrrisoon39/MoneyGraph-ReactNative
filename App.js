import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import { LineChart, BarChart, PieChart } from "react-native-chart-kit";
import Todo from "./Todo";

const App = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: "developer",
      amount: 100,
      timestamp : new Date(),
    },
    {
      description: "slave",
      amount: 200,
      timestamp : new Date(),
    },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
        timestamp : new Date(),
      },
    ]);
    setDescription("");
    setAmount("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="powderblue" />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>App</Text>
      <Text>Total Amount : {total}</Text>
      <View></View>

      <TextInput
        style={{
          height: 40,
          borderColor: "#0D5FC1",
          borderWidth: 2,
          margin: 7,
          width: 300,
          textAlign: "center",
          borderRadius: 70,
        }}
        placeholder="enter description"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "#0D5FC1",
          borderWidth: 2,
          margin: 7,
          width: 300,
          textAlign: "center",
          borderRadius: 70,
        }}
        placeholder="enter amount"
        keyboardType="numeric"
        onChangeText={(text) => setAmount(text)}
        value={amount}
      />

      <Button title="CLick ME" color="#0D5FC1" onPress={addGig} />
      {gigs.map((gig) => (
        <View style={{ margin: 7 }}>
          <Text style={{ color: "tomato", textAlign: "center" }}>
            {gig.description}
          </Text>
          <Text style={{ color: "tomato", textAlign: "center" }}>
            {gig.amount}
          </Text>
        </View>
      ))}
      <View>
        <Text style={{ textAlign: "center", margin: 10, fontSize: 30 }}>
          Bezier Line Chart
        </Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
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
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={3} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0, // optional, defaults to 2dp
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
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linen",
    alignItems: "center",
    marginTop: 24,
  },
});

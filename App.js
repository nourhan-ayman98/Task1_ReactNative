import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const IMGS = [
    require("./assets/Images/2.jpg"),
  ];
  let [imgs, setImgs] = useState(0);
  const handleCounter = () => {
    if (imgs == 2) setImgs(2);
    else setImgs(++imgs);
  };
  const handleCounterMinus = () => {
    if (imgs == 0) setImgs(0);
    else setImgs(--imgs);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Text"
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={(e) => {
          setText("Static Text");
        }}
      >
        <Text style={styles.loginText}>CHANGE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={(e) => {
            setText("");
          }}
        >
          CLEAR
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 40, marginBottom: 30 }}>{text}</Text>

      <Image style={styles2.image} source={IMGS[imgs]} />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles2.roundedButton}
          onPress={handleCounterMinus}
        >
          <Text style={styles2.roundedButtonTitle}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles2.roundedButton} onPress={handleCounter}>
          <Text style={styles2.roundedButtonTitle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "aqua",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#B8B8B8",
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 20,
    width: 200,
    height: 200,
  },
  roundedButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "aqua",
    fontSize: 20,
  },
});

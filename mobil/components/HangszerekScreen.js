/*
 * File: HangszerekScreen.js
 * Author: Vinkovits László
 * Copyright: 2024, Vinkovits László
 * Group: SZOFT II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/VinLaszlo
 * Licenc: GNU GPL
 */

import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";

export default function HackerScreen() {
  let host = "http://localhost:8000/";
  let endpoint = "hangszerek";
  let url = host + endpoint;

  const [hangszerek, setHangszerek] = useState([]);
  const [showHangszerek, setShowHangszerek] = useState(false);

  function getHangszerek() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHangszerek(res);
        setShowHangszerek(true);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hangszerek adatai</Text>
      <Pressable onPress={getHangszerek} style={styles.button}>
        <Text style={styles.buttonText}>Adatok megtekintése</Text>
      </Pressable>
      {showHangszerek && (
        <ScrollView style={styles.tableContainer}>
          {hangszerek.map((hangszer, index) => (
            <View key={index} style={styles.hangszerContainer}>
              <Text style={styles.hangszerName}>
                Hangszer neve: {hangszer.Nev}
              </Text>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Típus:</Text>
                <Text style={styles.data}>{hangszer.Tipus}</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Márka:</Text>
                <Text style={styles.data}>{hangszer.Marka}</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Év:</Text>
                <Text style={styles.data}>{hangszer.Ev}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DADE2",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  tableContainer: {
    backgroundColor: "#1F5CC0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 400,
    padding: 10,
  },
  hangszerContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hangszerName: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    fontSize: 16,
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#555",
  },
  data: {
    color: "#333",
  },
});

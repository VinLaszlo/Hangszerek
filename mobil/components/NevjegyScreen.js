/*
 * File: NevjegyScreen.js
 * Author: Vinkovits László
 * Copyright: 2024, Vinkovits László
 * Group: SZOFT II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/VinLaszlo
 * Licenc: GNU GPL
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NevjegyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.nevjegy}>
        <Text style={styles.nevjegyText}>Névjegy</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <b>&copy; 2024. 04. 03. | Hajdara Patrik | SZOFT II/2/N</b>
        </Text>
        <Text style={styles.footerText}>
          <b>
            <br></br>BZSH Külkereskedelmi Technikum
          </b>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  nevjegy: {
    marginBottom: 20,
  },
  nevjegyText: {
    fontSize: 24,
    color: "#17202A",
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    backgroundColor: "#F0F3F4",
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#BDC3C7",
    backgroundColor: "lightblue",
  },
  footerText: {
    color: "#17202A",
    fontFamily: "Arial",
    fontSize: 15,
  },
});

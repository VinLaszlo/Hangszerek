/*
 * File: App.js
 * Author: Hajdara Patrik
 * Copyright: 2024, Hajdara Patrik
 * Group: SZOFT II/2/N
 * Date: 2024-04-03
 * Github: https://github.com/06776/
 * Licenc: GNU GPL
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HangszerekScreen from "./components/HangszerekScreen";
import NevjegyScreen from "./components/NevjegyScreen";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hangszerek" component={HangszerekScreen} />
        <Tab.Screen name="Névjegy" component={NevjegyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

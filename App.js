import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./components/Home";
import News from "./components/News";
import Settings from "./components/Settings";
import StockContext from "./components/stock";
import * as ROUTES from "./routes";
import { StatusBar } from "expo-status-bar";

const { Navigator } = Platform.select({
  ios: { Navigator: createBottomTabNavigator() },
  android: { Navigator: createDrawerNavigator() },
});

const INITIAL_STOCK = {
  first: 1,
  second: 0,
  third: 200,
};

export default function App() {
  const [stock, setStock] = React.useState({ ...INITIAL_STOCK });
  const updateStock = (id) =>
    setStock({ ...stock, [id]: stock[id] === 0 ? 0 : stock[id] - 1 });

  return (
    <StockContext.Provider value={{ stock, updateStock }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigator.Navigator initialRouteName={ROUTES.HOME}>
          <Navigator.Screen
            name={ROUTES.HOME}
            component={Home}
            options={{ title: ROUTES.HOME }}
          />
          <Navigator.Screen
            name={ROUTES.NEWS}
            component={News}
            options={{ title: ROUTES.NEWS }}
          />
          <Navigator.Screen
            name={ROUTES.SETTINGS}
            component={Settings}
            options={{ title: ROUTES.SETTINGS }}
          />
        </Navigator.Navigator>
      </NavigationContainer>
    </StockContext.Provider>
  );
}

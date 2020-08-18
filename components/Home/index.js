import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import List from "../List";
import Details from "../Details";
import StockContext from "../stock";
import * as ROUTES from "../../routes";

const Stack = createStackNavigator();

const Home = () => {
  const { stock, updateStock } = React.useContext(StockContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LIST}
        component={List}
        options={{ title: ROUTES.LIST }}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={Details}
        options={({ route }) => {
          const { title, id } = route.params;

          return {
            title,
            headerRight: () => (
              <Button
                title="Buy"
                onPress={() => updateStock(id)}
                disabled={stock[id] === 0}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;

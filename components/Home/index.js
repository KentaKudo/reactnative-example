import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ItemList from "../ItemList";
import Details from "../Details";
import StockContext from "../stock";
import * as ROUTES from "../../routes";

const Stack = createStackNavigator();

const Home = () => {
  const { stock, updateStock } = React.useContext(StockContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ITEM_LIST}
        component={ItemList}
        options={{ title: ROUTES.ITEM_LIST }}
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

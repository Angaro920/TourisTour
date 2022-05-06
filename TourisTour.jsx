import { View } from "react-native";
import { TourisTourStyles, ShopStyle } from "./styles";
import { Text } from "@ui-kitten/components";

import shopList from "./data/shops";

import Shop from "./components/Shop";

export const TourisTour = () => {
  return (
    <View style={TourisTourStyles.container}>
      <Text style={ShopStyle.name}>Shops List</Text>

      {shopList.map((shop, index) => (
        <Shop
          key={index}
          name={shop.name}
          description={shop.description}
          owner={shop.owner}
          image={shop.image}
        />
      ))}
    </View>
  );
};

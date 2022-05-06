import { View } from "react-native";
import { TourisTourStyles, ShopStyle } from "./styles";
import React from "react";
import { Button, Modal, Card, Text } from "@ui-kitten/components";

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
export const More = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <Button onPress={() => setVisible(true)}>Ver mas...</Button>
      <Modal
        visible={visible}
        backdropStyle={TourisTourStyles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Esto es una prueba xD</Text>
          <Button onPress={() => setVisible(false)}>Salir</Button>
        </Card>
      </Modal>
    </View>
  );
};

import PropTypes from "prop-types";
import { TourisTourStyles, ShopStyle } from "../styles";
import React from "react";
import { Button, Modal, Card, Text } from "@ui-kitten/components";

import { View, Image } from "react-native";

const Shop = ({ name, description, image, owner }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={ShopStyle.container}>
      <Text style={ShopStyle.name}>{name}</Text>
      <Image style={ShopStyle.image} resizeMode="center" source={image} />
      <Button onPress={() => setVisible(true)}>Ver mas...</Button>
      <Modal
        visible={visible}
        backdropStyle={TourisTourStyles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card style={ShopStyle.card} disabled={true}>
          <Text style={ShopStyle.name}>{name}</Text>
          <Text style={ShopStyle.owner}>{owner}</Text>
          <Text style={ShopStyle.description}>{description}</Text>
          <Image style={ShopStyle.imageDes} resizeMode="center" source={image}/>
          <Button onPress={() => setVisible(false)}>Salir</Button>
        </Card>
      </Modal>
    </View>
  );
};

Shop.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
  owner: PropTypes.string,
};

export default Shop;

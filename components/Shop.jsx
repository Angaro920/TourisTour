import PropTypes from "prop-types";
import { ShopStyle } from "../styles";

import { Text, View, Image } from "react-native";

const Shop = ({ name, description, image, owner }) => {
  return (
    <View style={ShopStyle.container}>
      <Text style={ShopStyle.name}>{name}</Text>
      <Text style={ShopStyle.owner}>{owner}</Text>
      <Text style={ShopStyle.description}>{description}</Text>
      <Image style={ShopStyle.image} resizeMode="center" source={image} />
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

import { StyleSheet } from "react-native";

export const TourisTourStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,5)",
  },
});

export const ShopStyle = StyleSheet.create({
  container: {
    margin: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },

    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    borderRadius: 15,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
  },
  owner: {
    textAlign: "center",
    fontSize: 10,
  },
});

import { View, Text, Image, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite } = useContext(AppContext);

  return (
    <View style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
      <Image source={{ uri: product.image }} style={{ height: 100 }} />
      <Text>{product.name}</Text>
      <Text>{product.price} €</Text>

      <Button title="Ajouter au panier" onPress={() => addToCart(product)} />
      <Button title="Favoris" onPress={() => toggleFavorite(product)} />
    </View>
  );
}

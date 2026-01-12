import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function FavoritesScreen() {
  const { favorites, toggleFavorite, addToCart } = useContext(AppContext);

  return (
    <View style={{ padding: 10 }}>
      {favorites.map((p) => (
        <View key={p.id}>
          <Text>{p.name}</Text>
          <Button title="Supprimer" onPress={() => toggleFavorite(p)} />
          <Button title="Ajouter au panier" onPress={() => addToCart(p)} />
        </View>
      ))}
    </View>
  );
}

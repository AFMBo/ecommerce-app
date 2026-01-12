import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ProfileScreen() {
  const { favorites, cart, darkMode, setDarkMode } = useContext(AppContext);

  return (
    <View style={{ padding: 10 }}>
      <Text>Nom : B</Text>
      <Text>Prénom : Antonin</Text>
      <Text>Email : test@test.test</Text>

      <Text>Produits dans le panier : {cart.length}</Text>

      <Text>Favoris :</Text>
      {favorites.map((f) => (
        <Text key={f.id}>{f.name}</Text>
      ))}

      <Button
        title={`Mode ${darkMode ? "Clair" : "Sombre"}`}
        onPress={() => setDarkMode(!darkMode)}
      />
    </View>
  );
}

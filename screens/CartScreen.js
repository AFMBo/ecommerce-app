import { View, Text } from "react-native";
import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

export default function CartScreen() {
  const { cart } = useContext(AppContext);

  const total = useMemo(
    () => cart.reduce((sum, p) => sum + p.price, 0),
    [cart]
  );

  return (
    <View style={{ padding: 10 }}>
      {cart.map((p, i) => (
        <Text key={i}>{p.name} - {p.price} €</Text>
      ))}
      <Text>Total : {total} €</Text>
    </View>
  );
}

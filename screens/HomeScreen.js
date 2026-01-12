import { ScrollView } from "react-native";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 10 }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ScrollView>
  );
}

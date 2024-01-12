import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../types/product";
import { NavigationProps } from "../types/navigation";

export const HomeScreen = ({ navigation }: NavigationProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setProducts(products);
      });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={products}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", padding: 16 }}
            onPress={() => navigation.navigate("ProductScreen", { productId: item.id })}
          >
            <Image style={{ flex: 1 }} source={{ uri: item.thumbnail }} width={300} height={150} />
            <View style={{ flex: 1, padding: 16 }}>
              <Text style={{ fontWeight: "bold", fontSize: 32, lineHeight: 42, maxHeight: 84, overflow: "hidden" }}>{item.title}</Text>
              <Text style={{ fontSize: 16, lineHeight: 24, maxHeight: 72 }}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

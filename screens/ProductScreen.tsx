import { ImageBackground, Text, View } from "react-native";
import { NavigationProps } from "../types/navigation";
import { useEffect, useState } from "react";
import { Product } from "../types/product";

export const ProductScreen = ({ navigation, route }: NavigationProps) => {
  const { params } = route;
  const [product, setProduct] = useState<Product | undefined>();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  if (!product) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: product.thumbnail }}>
        <View style={{ height: 300 }} />
      </ImageBackground>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 48, fontWeight: "bold" }}>{product.title}</Text>
      </View>
    </View>
  );
};

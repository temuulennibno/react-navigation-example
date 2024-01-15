import { ImageBackground, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { RouteProp } from "@react-navigation/native";
import { HomeNavigationProps, RootStackParamList } from "../types/navigation";

type ProductScreen = {
  route: RouteProp<RootStackParamList, "ProductScreen">;
  navigation: HomeNavigationProps;
};

export const ProductScreen = ({ route }: ProductScreen) => {
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

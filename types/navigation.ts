import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductScreen: { productId: number };
};
export type NavigationProps = NativeStackScreenProps<RootStackParamList, "HomeScreen", "ProductScreen">;

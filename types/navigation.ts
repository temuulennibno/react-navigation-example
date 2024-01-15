import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductScreen: { productId: number };
};

export type ProductNavigationProps = StackNavigationProp<RootStackParamList, "ProductScreen">;

export type HomeNavigationProps = StackNavigationProp<RootStackParamList, "HomeScreen">;

export type AppNavigationProps = HomeNavigationProps | ProductNavigationProps;

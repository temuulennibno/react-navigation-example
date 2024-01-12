import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
      <Button title="Go to About screen" onPress={() => navigation.navigate("AboutScreen", { name: "Temuulen" })} />
    </View>
  );
};

import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const AboutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  console.log("params:", params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About screen</Text>
      <Button title="Go to Home screen" onPress={() => navigation.goBack()} />
    </View>
  );
};

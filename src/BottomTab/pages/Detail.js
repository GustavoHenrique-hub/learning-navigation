import { View, Text, StyleSheet } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontFamily: "Nunito_700Bold",
    backgroundColor: "purple100",
  },
});

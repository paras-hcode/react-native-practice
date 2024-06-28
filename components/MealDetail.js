import { StyleSheet, Text, View } from "react-native";

const MealDetail = ({ item }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{item.duration}</Text>
      <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

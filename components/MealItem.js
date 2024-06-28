import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetail from "./MealDetail";

const MealItem = ({ item }) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    console.log("meal is selected");
    navigation.navigate("MealsDetails", {
      item: item,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [pressed && styles.pressed]}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
        <MealDetail item={item} />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    // overflow: "hidden",
    backgroundColor: "white",

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  pressed: {
    opacity: 0.25,
  },
});

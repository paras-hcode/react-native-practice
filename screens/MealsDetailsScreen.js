import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../dummy-data";
import MealDetail from "../components/MealDetail";
import { useContext, useLayoutEffect } from "react";
import { FavoriteContext } from "../store/context/favorites-context";

const MealsDetailsScreen = ({ route, navigation }) => {
  const { id, addFavorite } = useContext(FavoriteContext);
  const mealItem = route.params.item;
  const selectedMeal = MEALS.find((meal) => meal.id == mealItem.id);

  const buttonHandler = () => {
    if (!id.includes(selectedMeal.id)) addFavorite(selectedMeal.id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="tap me" onPress={buttonHandler} />,
    });
  }, [buttonHandler, navigation]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail item={selectedMeal} />
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <View key={ingredient}>
            <Text>{ingredient}</Text>
          </View>
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <View key={step}>
            <Text key={step}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "gray",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  listContainer: {
    width: "80%",
  },
});

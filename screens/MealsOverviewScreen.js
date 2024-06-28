import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId: catId } = route.params;
  console.log(catId);

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));
  const renderMealItem = ({ item }) => {
    return <MealItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

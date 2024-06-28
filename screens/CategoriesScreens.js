import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreens = ({ navigation }) => {
  const onPressHandler = (item) => {
    // console.log(item);
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
    });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={onPressHandler.bind(this, item)}
          />
        );
      }}
      numColumns={2}
    />
  );
};

export default CategoriesScreens;

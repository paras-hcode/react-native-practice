import { useContext } from "react";
import { FlatList, Text } from "react-native";
import { FavoriteContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const { id } = useContext(FavoriteContext);
  return (
    <Text>
      <FlatList
        data={id}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </Text>
  );
};

export default FavoritesScreen;

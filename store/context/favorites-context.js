import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavMealIds((meals) => [...meals, id]);
  };
  const removeFavorite = (id) => {
    const meals = favMealIds.filter((mid) => mid != id);
    setFavMealIds(meals);
  };

  return (
    <FavoriteContext.Provider
      value={{ id: favMealIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

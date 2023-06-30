import React from "react";

import {User} from "~/types/typeUser";
import {Product} from "~/types/typeProduct";
import {fetchProducts} from "~/Api/ApiProducts";
import {fetchHistory} from "~/Api/ApiHistory";
import {History} from "~/types/typeHistory";
import {fetchUser} from "~/Api/ApiUser";

export interface Context {
  state: {
    user: User;
    history: History[];
    products: Product[];
    originalProducts: Product[];
  };
  actions: {
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setHistory: React.Dispatch<React.SetStateAction<History[]>>;
    filterProducts: (value: Product[]) => void;
  };
}

const UserContext = React.createContext({} as Context);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>({
    id: "5a03638052fd231590d04eb5",
    name: "John Kite",
    points: 2000,
    redeemHistory: [],
    createDate: "new Date(1510171520852)",
  });
  const [history, setHistory] = React.useState<History[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const user = await fetchUser();
        const newProducts = await fetchProducts();
        const newHistory = await fetchHistory();

        setUser(user);
        setProducts(newProducts);
        setOriginalProducts(newProducts);
        setHistory(newHistory);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  //No funciona.
  React.useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      points: user.points,
    }));
  }, [user.points]);

  const filterProducts = (productsFiltered: Product[]) => {
    setProducts(productsFiltered);
  };

  if (!user || status === "pending") {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );
  }

  const state: Context["state"] = {
    user,
    history,
    products,
    originalProducts,
  };
  const actions = {
    setProducts: setProducts,
    setHistory: setHistory,
    filterProducts: filterProducts,
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};

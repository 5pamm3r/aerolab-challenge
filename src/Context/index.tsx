import React from "react";

import {User} from "~/types/typeUser";
import {Product} from "~/types/typeProduct";
import {fetchProducts} from "~/Api/ApiProducts";
import {fetchHistory} from "~/Api/ApiHistory";
import {History} from "~/types/typeHistory";

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
  // const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

  React.useEffect(() => {
    (() => {
      const user = {
        id: "5a03638052fd231590d04eb5",
        name: "John Kite",
        points: 2000,
        redeemHistory: [],
        createDate: "new Date(1510171520852)",
      };

      setUser(user);
    })();

    (async () => {
      try {
        //const user = await fetchUser();
        const newProducts = await fetchProducts();
        const newHistory = await fetchHistory();

        // setUser(user);
        setProducts(newProducts);
        setOriginalProducts(newProducts);
        setHistory(newHistory);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};

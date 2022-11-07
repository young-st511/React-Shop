import { atom, AtomEffect, selector } from "recoil";
import { CartType } from "./types/CartType";

const localSyncEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet, storeID }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      //! TEST
      console.log("init!", storeID);
      ////
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const cartListState = atom<CartType>({
  key: "cartListState",
  default: {},
  effects: [localSyncEffect<CartType>("cartListState")],
});

const cartListNumState = selector({
  key: "cartListNumState",
  get: ({ get }) => {
    const cartList = get(cartListState);

    return cartList.reduce((sum, item) => item.number + sum, 0);
  },
});

const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
});

export { cartListState, cartListNumState, themeState };

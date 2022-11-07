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

const cartListState = atom({
  key: "cartListState",
  default: JSON.parse(localStorage.getItem("localCartList") ?? "") ?? {},
  effects: [localSyncEffect<CartType>("cartListState")],
});

const cartListNumState = selector({
  key: "cartListNumState",
  get: ({ get }) => {
    const cartList = get(cartListState);

    return Object.keys(cartList).length;
  },
});

const themeState = atom({
  key: "themeState",
  default: {},
});

export { cartListState, cartListNumState, themeState };

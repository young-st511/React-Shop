import { atom, AtomEffect, selector } from "recoil";
import { CartItemType, CartType } from "./types/cartType";

const localSyncEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet, storeID, node, trigger }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      //! TEST
      console.log("local init!", storeID, "node", node, "trigger", trigger);
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

const cartListArrayState = selector({
  key: "cartListArray",
  get: ({ get }) => {
    const cartList = get(cartListState);
    const cartArray: CartItemType[] = [];

    for (const id in cartList) {
      if (Object.prototype.hasOwnProperty.call(cartList, id)) {
        const item = cartList[id];
        cartArray.push(item);
      }
    }

    return cartArray;
  },
});

const cartListNumState = selector({
  key: "cartListNumState",
  get: ({ get }) => {
    const cartList = get(cartListArrayState);

    return cartList.reduce((sum, item) => item.number + sum, 0);
  },
});

const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
});

export { cartListState, cartListNumState, cartListArrayState, themeState };

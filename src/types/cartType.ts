export type CartType = { [key: number]: CartItemType };
// | { [key: string]: never };

export interface CartItemType {
  id: number;
  title: string;
  image: string;
  price: number;
  number: number;
}

export type CartType = CartItemType[] | { [key: string]: never };

interface CartItemType {
  id: string;
  number: number;
}

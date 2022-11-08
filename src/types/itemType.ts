import { CategoryType } from "./categoryType";

export interface ItemType {
  id: number;
  title: string;
  price: number;
  category: CategoryType;
  description: string;
  image: string;
}

import { CategoryType } from "../types/categoryType";

const getListName = (category: CategoryType) => {
  switch (category) {
    case "men's clothing":
      return "남성 의류";
    case "women's clothing":
      return "여성 의류";
    case "electronics":
      return "디지털";
    case "jewelery":
      return "악세서리";

    default:
      return "error";
  }
};

export const getListPath = (category: CategoryType) => {
  switch (category) {
    case "men's clothing":
    case "women's clothing":
      return "/fashion";
    case "electronics":
      return "/digital";
    case "jewelery":
      return "/accessory";

    default:
      return "error";
  }
};

export default getListName;

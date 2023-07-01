import {Product} from "./typeProduct";

export interface History {
  productId: Product["_id"];
  name: Product["name"];
  cost: Product["cost"];
  category: Product["category"];
  _id: string;
  createDate: string;
  img: Product["img"];
  count: number;
}

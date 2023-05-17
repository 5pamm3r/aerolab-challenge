import {Product} from "./typeProduct";

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
}

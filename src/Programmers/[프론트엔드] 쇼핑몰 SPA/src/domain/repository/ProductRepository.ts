import {Product} from "../model/Product";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
}

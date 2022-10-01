import {ProductAPIEntity} from "./api/entity/ProductAPIEntity";

export interface ProductDataSource {
  getProducts(): Promise<ProductAPIEntity[]>;
}

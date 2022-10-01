import {Product} from "../../domain/model/Product";
import {ProductRepository} from "../../domain/repository/ProductRepository";
import {ProductDataSource} from "../datasource/ProductDataSource";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private productDataSource: ProductDataSource) {}
  getProducts(): Promise<Product[]> {
    return this.productDataSource.getProducts();
  }
}

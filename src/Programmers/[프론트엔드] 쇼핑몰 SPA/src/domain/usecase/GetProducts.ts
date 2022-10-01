import {Product} from "../model/Product";
import {ProductRepository} from "../repository/ProductRepository";
import {UseCase} from "./base";

export interface GetProducts extends UseCase {
  invoke(): Promise<Product[]>;
}

export class GetProductUseCase implements GetProducts {
  constructor(private productRepository: ProductRepository) {}
  invoke(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}

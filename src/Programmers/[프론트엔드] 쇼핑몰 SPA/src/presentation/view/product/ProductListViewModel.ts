import {useEffect, useState} from "react";
import ProductDataSourceImpl from "../../../data/datasource/api/ProductDataSourceImpl";
import {ProductRepositoryImpl} from "../../../data/repository/ProductRepositoryImpl";
import {Product} from "../../../domain/model/Product";
import {GetProductUseCase} from "../../../domain/usecase/GetProducts";

export function useProductViewModel() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProductUseCase = new GetProductUseCase(
    new ProductRepositoryImpl(new ProductDataSourceImpl())
  );
  async function getProducts() {
    setProducts(await getProductUseCase.invoke());
  }

  return {products, getProducts};
}

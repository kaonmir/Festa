import {Product} from "../../../domain/model/Product";
import {ProductDataSource} from "../ProductDataSource";
import {ProductAPIEntity} from "./entity/ProductAPIEntity";

const BASE_URL = " https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<TypedResponse<T>> {
  return fetch(input, init);
}

export default class ProductDataSourceImpl implements ProductDataSource {
  async getProducts(): Promise<ProductAPIEntity[]> {
    const response = await myFetch<ProductAPIEntity[]>(
      `${BASE_URL}/dev/products`
    );
    const products = await response.json();
    return products;
  }
}

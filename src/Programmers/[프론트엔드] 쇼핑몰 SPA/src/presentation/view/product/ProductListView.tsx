import {useEffect} from "react";
import {List, ListItem} from "material-ui";
import {useProductViewModel} from "./ProductListViewModel";

export default function ProductView() {
  const {getProducts, products} = useProductViewModel();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <List>
      {products.map((product, i) => {
        return <ListItem key={i}>product.name</ListItem>;
      })}
    </List>
  );
}

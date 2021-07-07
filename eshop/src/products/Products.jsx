import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "../common/requests";
import Spinner from "../common/components/Spinner";
import useAPI from "../common/hooks/useAPI";
function Products() {
  const { data: products, isLoading, call } = useAPI();
  useEffect(() => {
    call(fetchProducts);
  }, []); //eslint-disable-line
  if (isLoading || !products) {
    return <Spinner text="Getting products" />;
  }
  return (
    <div>
      <ul className="flex flex-wrap">
        {products.map((item) => (
          <ProductCard key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
        ))}
      </ul>
    </div>
  );
}

export default Products;

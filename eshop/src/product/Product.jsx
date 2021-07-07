import { useEffect } from "react";
import { useParams } from "react-router";
import Counter from "../common/components/Counter";
import { fetchProduct } from "../common/requests";
import Card from "../common/components/Card";
import AddToCartButton from "./components/AddToCartButton";
import Spinner from "../common/components/Spinner";
import useCounter from "../common/hooks/useCounter";
import useAPI from "../common/hooks/useAPI";

function Product() {
  const { productId } = useParams();
  const counterProps = useCounter();
  const { data: product, isLoading, call } = useAPI();
  const { isLoading: isAddToCartLoading, call: callAddToCart } = useAPI();
  useEffect(() => {
    call(fetchProduct(productId));
  }, []); //eslint-disable-line

  async function handleAddToCart() {
    callAddToCart(product.id, counterProps.count);
  }
  if (isLoading) {
    return <Spinner text="Getting product info" />;
  }
  console.log("rendering product");
  return (
    <div className="flex m-auto px-2" style={{ maxWidth: 1000 }}>
      <div className="pr-2  max-w-1/2">
        <Card>
          <img src={product?.image} alt={product?.title} />
        </Card>
      </div>
      <div className="pl-6 max-w-1/2">
        <h1 className="text-xl mb-4 font-semibold">{product?.title}</h1>
        <div className="text-3xl mb-4 font-bold">${product?.price}</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter className="mb-4" {...counterProps} />
        <AddToCartButton isLoading={isAddToCartLoading} onClick={handleAddToCart}></AddToCartButton>
      </div>
    </div>
  );
}

export default Product;

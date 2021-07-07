import Button from "../../common/components/Button";
import useLoadingDots from "../../common/hooks/useLoadingDots";

function LoadingBtn() {
  const dots = useLoadingDots();
  console.log("loading button");
  return (
    <Button type="primary" disabled>
      ADDING TO CART{dots}
    </Button>
  );
}

function Btn({ onClick }) {
  return (
    <Button type="primary" onClick={onClick}>
      ADD TO CART
    </Button>
  );
}
function AddToCartButton({ isLoading, onClick }) {
  console.log("rendering dots");
  if (isLoading) {
    return <LoadingBtn />;
  }

  return <Btn onClick={onClick} />;
}

export default AddToCartButton;

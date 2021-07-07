import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../common/assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../common/providers/CartProvider";

function CartIconWithNr() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <CartIcon className="w-8 h-8" />
      <span className="absolute text-blue-500 text-xs font-bold" style={{ right: "35%", top: "25%" }}>
        {cart?.products?.length}
      </span>
    </>
  );
}

function CartNavItem() {
  return <NavItem route="/cart" content={<CartIconWithNr />} className="ml-auto mr-2 relative" />;
}

export default CartNavItem;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Vision from "./vision/Vision";
import Product from "./product/Product";
import Error from "./error/Error";
import CartProvider from "./common/providers/CartProvider";
import Cart from "./cart/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-2" style={{ height: "calc(100vh - 44px)" }}>
          <Switch>
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/products/:productId" component={Product} />
            <Route exact path={["/", "/products"]} component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/error" component={Error} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}
export default App;

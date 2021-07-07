import NavItem from "./components/NavItem";
import CartNavItem from "./components/CartNavItem";

const navItems = [
  { content: "PRODUCTS", route: "/" },
  { content: "VISION", route: "/vision" },
];

function NavBar() {
  return (
    <nav className="bg-red-300">
      <ul className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
        <CartNavItem />
      </ul>
    </nav>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Voltix<span>Accessories</span>
      </NavLink>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/add-product">
          Add Product
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

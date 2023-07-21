import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import cartIcon from "../../../assets/icons/cart.svg";
import logo from "../../../assets/icons/logo-no-background.png";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let totalCartItem = 0;
  cartCtx.items.forEach((item) => (totalCartItem += item.quantity));

  const cartHandler = () => {
    props.onCartToggle();
  };

  return (
    <header>
      <Navbar
        expand="sm"
        className={`${classes.header} h-100 shadow justify-content-between`}
      >
        <div>
          <img
            className="ms-5"
            height="50"
            width="70"
            src={logo}
            alt="brand name the generics"
          />
        </div>
        <Nav className="ms-5">
          <NavLink
            to="/home"
            activeClassName={classes.header__link_active}
            className={classes.header__link}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName={classes.header__link_active}
            to="/store"
            className={classes.header__link}
          >
            Store
          </NavLink>
          <NavLink
            activeClassName={classes.header__link_active}
            to="/about"
            className={classes.header__link}
          >
            About
          </NavLink>
        </Nav>
        <NavLink
          activeClassName={classes.header__link_active}
          to="/shopping_cart"
          style={{ height: "2rem" }}
          className={`d-flex ${classes.cartIcon}`}
        >
          <img className="h-100 w-100" src={cartIcon} alt="shopping cart" />
          <h4 className="ms-2 text-primary">{totalCartItem}</h4>
        </NavLink>
      </Navbar>
    </header>
  );
};

export default Header;

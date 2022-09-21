import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const badgeCounter = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeCounter}</span>
    </button>
  );
};

export default CartButton;

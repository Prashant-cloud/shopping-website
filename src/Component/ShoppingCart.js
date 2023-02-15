import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { decrementItemQty, incrementItemQty, removeItem } from "./Store/cart";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CheckOut");
  };

  const dispatche = useDispatch();

  const cartProduct = useSelector((store) => store.cart);

  let count = 0;
  cartProduct.map((product) => {
    return (count = count + product.length);
  });
  const deleteProduct = (id) => {
    dispatche(removeItem(id));
  };

  const handleDecrement = (id) => {
    dispatche(decrementItemQty(id));
  };

  const handleIncrement = (id) => {
    dispatche(incrementItemQty(id));
  };

  return (
    <div>
      <NavBar />
      <div className="cart-item">
        <p>Cart Items</p>
      </div>

      <div className="cart-container">
        {cartProduct.map((cart) => {
          return (
            <>
              <div className="container">
                <div className="product-name">
                  {cart.id}
                </div>
                <div className="quantity">
                  <button
                    className="handle"
                    onClick={() => handleDecrement(cart)}
                  >
                    -
                  </button>
                  <p></p>
                  <button
                    className="handle"
                    onClick={() => handleIncrement(cart)}
                  >
                    +
                  </button>
                </div>
                <div className="price">Price</div>
                <div className="remove">
                  <button className="handle" onClick={() => deleteProduct}>
                    X
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button className="check-out" onClick={handleClick}>
        Check Out
      </button>

      <Footer />
    </div>
  );
};

export default ShoppingCart;

//feature of cart
//1 Show item count of cart in Navbar(Reading)
// 2. Add to cart any product
// 3. List down item added to
// 4. Remove item from cart
// 5. Incremenent item count in cart
// 6. Decrement item count in cart

// store/state
/*[
  {title}
  {title}
] 

Action:
1.Add
2.Remove
3Increment
4.Decrement
*/

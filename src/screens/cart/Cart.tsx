import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Button from 'react-bootstrap/Button';
import { cartSlice } from "../../redux/cartslice/cartSlice";

function Cart() {
    const cartInfo: any = useSelector((state) => state);
    // const cartItems = useSelector((state: any) => state.cart.cartItems);
    const dispatch = useDispatch();

    function removeCartitem(params:any){
        const filtered = cartInfo.cart.cartItems.filter(
            (item:any) => item.id !== params.id
        );
        dispatch(cartSlice.actions.removeCart(filtered));
    }
    // const totalPrice = cartItems.reduce(
    //     (acc: number, item: any) => acc + item.price,
    //     0
    // );
    return (
        <section className="cart-screen-container">
            <div className="cart-items-container">
                {cartInfo.cart.cartItems.length > 0
                    ? cartInfo.cart.cartItems.map((item: any, index: any) => {
                        return (
                            <div key={index} className="cart-card">
                                <img src={item.thumbnail} alt="cart-item"></img>
                                <div className="cart-detail">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <Button className="remove"variant="primary"
                                    onClick={() => {
                                        removeCartitem(item);
                                    }}>Remove</Button>
                                </div>
                            </div>
                        );
                    })
                    : (
                        <p className="empty-cart">Your cart is empty.</p>
                    )}
            </div>

            {/* Total & Checkout */}
            {/* {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    <Button variant="success" className="checkout-button">
                        Proceed to Checkout
                    </Button>
                </div>
            )} */}
        </section>
    );
}
export default Cart;
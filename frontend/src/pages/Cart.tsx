import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../api/axios";

const Cart = () => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalPrice
    } = useContext(CartContext)!;

    const handleCheckout = async () => {
        const { data } = await API.post("/orders/checkout", {
            cart
        });

        if (data.url) {
            window.location.href = data.url;
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl mb-6">Cart</h1>

            {cart.map(item => (
                <div key={item._id} className="flex justify-between mb-4">
                    <div>
                        <h2>{item.name}</h2>
                        <p>₹ {item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={() => decreaseQty(item._id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item._id)}>+</button>
                    </div>

                    <button onClick={() => removeFromCart(item._id)}>
                        Remove
                    </button>
                </div>
            ))}

            <h2 className="text-xl mt-6">Total: ₹ {totalPrice}</h2>

            <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 mt-4"
            >
                Checkout
            </button>
        </div>
    );
};



export default Cart;
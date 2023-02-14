import { useSelector } from "react-redux";


const Cart =()=>{
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="font-bold text-3xl">
            <h2 className="m-2">Items in the cart: {cartItems.length}</h2>  
        </div>
    )
}

export default Cart;
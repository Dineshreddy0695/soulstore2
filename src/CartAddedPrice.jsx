import useCartStore from "./useCartStore";

const CartAddedPrice = () => {

 const cart = useCartStore((state) => state.cart);
const total = useCartStore((state) => state.cartTotal(state));

return(
<div>






</div>
)
}
export default CartAddedPrice;
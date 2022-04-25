import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cartDropdown.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;

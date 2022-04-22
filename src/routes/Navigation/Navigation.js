import './navigation.scss';
import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutAuthUser();
        // setCurrentUser(null);
    };
    return (
        <Fragment>
            <div className="nav">
                <div>
                    <Link to="/" className="logo-container">
                        <Logo className="logo" />
                    </Link>
                </div>
                <div className="nav-list">
                    <Link to="/shop" className="nav-link">
                        Shop
                    </Link>
                    {currentUser ? ( // if currentUser is truthy, then show the link to the account page
                        <Link to="/" className="nav-link" onClick={signOutHandler}>
                            Logout
                        </Link>
                    ) : (
                        <Link to="/auth" className="nav-link">
                            Sign In
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;

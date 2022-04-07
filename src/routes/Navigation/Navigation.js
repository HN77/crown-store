import './navigation.scss';
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Navigation = () => {
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
                    <Link to="/signin" className="nav-link">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;

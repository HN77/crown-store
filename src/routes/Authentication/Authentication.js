import './authentication.scss';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';

const Authentication = () => {
    return (
        <div className="form">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Authentication;

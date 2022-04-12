import './signIn.scss';
import SignUp from '../../SignUp/SignUp';
import { signInwithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../../components/Button/Button';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="form">
            <div className="sign-in-container">
                <h1>Signin</h1>
                <Button buttonType="google" onClick={logGoogleUser}>
                    Sign In With Google
                </Button>
            </div>
            <SignUp />
        </div>
    );
};

export default SignIn;

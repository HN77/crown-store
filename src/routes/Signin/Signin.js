import { signInwithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    );
};

export default Signin;

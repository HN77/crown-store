import React, { useState } from 'react';
import './signIn.scss';
import InputForm from '../InputForm/InputForm';
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInwithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const googleSignIn = async () => {
        const { user } = await signInwithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                default:
                    console.log('Sign in encountered an error', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <h1>Please Sign In</h1>
            <form onSubmit={handleSubmit}>
                <InputForm onChange={handleChange} type="email" name="email" value={email} label="Email" required />

                <InputForm
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    required
                />
                <div className="btn-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={googleSignIn} buttonType="google">
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;

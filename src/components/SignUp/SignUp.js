import React, { useState } from 'react';
import './signUp.scss';
import InputForm from '../InputForm/InputForm';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            // setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('User creation encountered an error', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>Don't' have an account?</h2>
            <h1>Please Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Username"
                    required
                />

                <InputForm onChange={handleChange} type="email" name="email" value={email} label="Email" required />

                <InputForm
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    required
                />

                <InputForm
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;

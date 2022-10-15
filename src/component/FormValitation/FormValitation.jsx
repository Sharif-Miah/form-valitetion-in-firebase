import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app)
const FormValitation = () => {

    const [passwordErrod, setpasswordErrod] = useState('')

    const handleSubmitBtn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setpasswordErrod('Please give To UpperCase  two chacrectars')
            return;
        }
        if (password.length < 6) {
            setpasswordErrod('Please should be at least 6 characters.');
            return;
        }
        if (!/(?=.*[!#$%&?"])/.test(password)) {
            setpasswordErrod('Please shoult be at one speacila characters')
            return;
        }
        setpasswordErrod('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleSubmitBtn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <p className='text-danger'>{passwordErrod}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormValitation;
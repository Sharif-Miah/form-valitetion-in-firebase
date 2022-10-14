import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormValitation = () => {

    const handleSubmitBtn = event => {
        event.preventDefault()
        const email = event.target.value;
        const password = event.target.value;
        console.log(email, password);
    }

    return (
        <div className='w-50 mx-auto'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleSubmitBtn} type="email" placeholder="Enter email" name='email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleSubmitBtn} type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormValitation;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../actions/adminActions';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom'
const AdminLoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const adminLoginState = useSelector((state) => state.adminLogin);
    const { loading, error, adminInfo } = adminLoginState;

    useEffect(() => {
        if (adminInfo && !loading && !error) {
            history.push('/admin/dashboard');
        }
    }, [history, adminInfo, loading, error]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(adminLogin(email, password));
    };

    return (
        <FormContainer>
            <h1>Admin Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
                <p>Already signed up? <Link to='/admin/signup'>Signup</Link></p>
            </Form>
        </FormContainer>
    );
};

export default AdminLoginScreen;

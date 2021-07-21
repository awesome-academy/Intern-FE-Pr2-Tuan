import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    Form, 
    FormGroup, 
    Label, Input, 
    Button, 
} from 'reactstrap';
import callApi from '../../utils/apiCaller';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [inputValue, setInputvalue] = useState({
        username: '',
        password: '',
    });
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorCallApi, setErrorCallApi] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputvalue({
            ...inputValue,
            [name]: value,
        });
    };

    const validateFn = (inputValue, info) => {
        if (!inputValue) {
            return `The ${info} field is required.`;
        }
        if (info === 'password') {
            if (inputValue.length < 6) {
                return `${info.charAt(0).toUpperCase() + info.slice(1)} must be at least 5 characters.`;
            }
        }
        if (info === 'username') {
            if (inputValue.length < 6) {
                return `${info.charAt(0).toUpperCase() + info.slice(1)} must be at least 5 characters.`;
            }
        }
        return '';
    };

    const validate = (username, password) => {
        const usernameError = validateFn(username, 'email');
        const passwordError = validateFn(password, 'password');
        if (usernameError || passwordError) {
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = inputValue;
        const isValidate = validate(username, password);
        if (isValidate) {
            const account = {
                username,
                password,
            };
            callApi('api/admin/sign-in', 'POST', account).then((res) => {
                const adminToken = res.data.accessToken;
                localStorage.setItem('adminToken', adminToken);
                setIsLogin(true);
            }).catch((error) => {
                setErrorCallApi(error.response.data.message);
            });
        }
    };

    if (isLogin) {
        return <Redirect to="/admin/product" />;
    }

    return (
        <div 
            className="login-page w-100 vh-100 d-flex justify-content-center align-items-center" 
            style={{ backgroundColor: 'rgb(247, 247, 247)' }}
        >
            <div className="form-signin" style={{ width: '470px', backgroundColor: '#fff', padding: '40px' }}>
                <div className="form-signin__header text-center mb-4">
                    <img 
                        src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" 
                        alt="logo" 
                    />
                    <p className="m-3">Login to Admin</p>
                </div>
                {errorCallApi && <div className="text-danger">{errorCallApi}</div>}
                <Form onSubmit={onSubmit}>
                    <FormGroup className="mb-3">
                        <Label className="mb-1" for="Username">UserName</Label>
                        <Input 
                        type="text" 
                        name="username" 
                        id="Username" 
                        placeholder="EX: admin123" 
                        value={inputValue.username}
                        onChange={handleChange}
                        />
                        {usernameError && <div className="text-danger">{usernameError}</div>}
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label className="mb-1" for="Password">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="Password" 
                        placeholder="EX: admin123" 
                        value={inputValue.password}
                        onChange={handleChange}
                        />
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                    </FormGroup>
                    <Button size="lg" block type="submit" className="btn">Continue</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;

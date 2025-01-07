import React, { useState } from 'react';

const LoginForm = (props) => {
    const [username, setUsername] = useState('root');
    const [password, setPassword] = useState('123456');
    const { onLogin } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">用户名：</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">密码：</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">登录</button>
        </form>
    );
};

export default LoginForm;
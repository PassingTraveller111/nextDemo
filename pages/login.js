import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";

export default () => {
    const router = useRouter();
    const login = async (username, password) => {
        if (username === '' || password === '') {
            alert('用户名和密码不能为空');
            return;
        }
        console.log('login', username, password);
        try {
            const res = await axios.post('http://localhost:3000/api/login', {
                username,
                password,
            })
            console.log(res.data);
            router.push('/');
        } catch (error) {
            console.log(error);
        }

    }
    return <>
        <h1>login Page</h1>
        <LoginForm onLogin={login} />
    </>;
}
import React from 'react';
import Nav from '../components/Nav/nav.jsx';
import axios from "axios";
import {useRouter} from "next/router";

export default () => {
    const router = useRouter();
    const logout = async () => {
        const res = await axios.get('http://localhost:3000/api/logout');
        router.push('/login'); // 重定向到login页面
    }
    return <>
      <button onClick={logout}>退出登录</button>
      <Nav/>
    </>
}
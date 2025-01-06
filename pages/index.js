import React from 'react';
import Nav from '../components/Nav/nav.jsx';

export const getServerSideProps = async ({ req, res }) => {
  // 检查用户是否登录，例如通过 cookies 或 headers  
  // const isAuthenticated = req.cookies.authToken; // 只是一个示例
  const isAuthenticated = true;
  if (!isAuthenticated) {
    // 重定向到登录页面  
    return {  
      redirect: {  
        destination: '/login',  
        permanent: false, // 通常设置为 false，除非你想进行永久重定向  
      },  
    };  
  }  
  
  return { props: {} };  
}; 

export default () => {
    return <Nav/>
}
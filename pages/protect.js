// pages/protect.js  
import { useEffect } from 'react';  
import { useRouter } from 'next/router';  
import { useAuth } from '../hooks/useAuth'; // 假设你有一个自定义的 auth hook  
  
const ProtectPage = () => {  
  const router = useRouter();  
  const { isLogin } = useAuth(); // 假设 useAuth 返回一个 isLogin 状态  
  
  useEffect(() => {  
    if (!isLogin) {  
      // 如果用户未认证，重定向到登录页面  
      router.push('/login');  
    }  
  }, [isLogin, router]);  
  
  return <div>This is a protect page.</div>;  
};  
  
export default ProtectPage;
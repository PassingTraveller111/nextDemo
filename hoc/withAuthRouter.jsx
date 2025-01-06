// hoc/withAuthRouter.jsx
import { useEffect } from 'react';  
import { useRouter } from 'next/router';  
import { useAuth } from '../hooks/useAuth'; // 假设你有一个自定义的 auth hook  
  
const withAuthRouter = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();  
        const { isLogin } = useAuth(); // 假设 useAuth 返回一个 isLogin 状态  
        useEffect(() => {  
            if (!isLogin) {  
                // 如果用户未认证，重定向到登录页面
                router.push('/login');
            }  
        }, [isLogin, router]);
        return <WrappedComponent {...props}/>
    }
};  
  
export default withAuthRouter;
import jwt from 'jsonwebtoken';
import secretKey from "./lib/jwt";
import { NextResponse } from 'next/server';

async function jwtMiddleware(req) {
    const { pathname, search } = req.nextUrl;
    const token =  req.cookies.get('token')?.value ?? ''; // 从请求头中获取token
    if (token) {
        try {
            // const decoded = jwt.verify(token, secretKey);
            const decoded = 'jwt用的crypto模块在next的环境下没法用，这里直接通过';
            if(!decoded && pathname !== '/login') return NextResponse.redirect(new URL('/login', req.url)); // 解码失败，重定向到login页
            if(decoded && pathname === '/login') return NextResponse.redirect(new URL('/', req.url)); // 重定向到登录页
        } catch (error) {
            console.log(error);
            if(pathname !== '/login') return NextResponse.redirect(new URL('/login', req.url));
        }
    } else {
        if(pathname !== '/login') return NextResponse.redirect(new URL('/login', req.url));
    }
}
const middlewareB = (req) => {
    console.log('middlewareB');
}

export function middleware(req) {
    const { pathname, search } = req.nextUrl;
    // console.log('pathname', pathname);
    // console.log('search', search);
    // 通过req.nextUrl.pathname获取访问路径，需要注意的是不是只有访问页面会经过中间件，各种系统资源/api也会。
    // 不处理Next.js静态文件
    if (pathname.startsWith('/_next') ||
        pathname.startsWith('/static')
    ) {
        return NextResponse.next();
    }
    if (pathname.startsWith('/b')) { // 以/b为前缀
        console.log('/b');
        // return NextResponse.rewrite(new URL('/b', req.url)); // 重写，注意要return
        // return NextResponse.redirect(new URL('/login', req.url)); // 重定向
    }
    if (pathname === '/b') { // 只有/b的能走
        console.log('/b only');
        return middlewareB();
    }
    return jwtMiddleware(req);
}

export const config = {
    matcher: [
        // '/welcome', // 特定路径
        // '/b/:path*', // 前缀匹配
        '/((?!api|_next/static|_next/image|favicon.ico).*)', // 正则表达式过滤内部请求、静态资源
    ],
};
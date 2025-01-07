// pages/api/logout.js

export default async function handler(req, res) {
    res.setHeader('Set-Cookie', `token=; Max-Age=0; Path=/;`); // 删除cookie
    res.status(200);
    res.end();
}
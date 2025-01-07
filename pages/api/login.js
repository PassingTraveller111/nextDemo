// pages/api/login.js
import jwt from 'jsonwebtoken';
import secretKey from "../../lib/jwt";
import pool from '../../lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute(`SELECT * FROM userList WHERE username = '${username}'`);
        connection.release();
        if (rows.length && rows[0].username === username && rows[0].password === password) {
            const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
            res.setHeader('set-cookie', `token=${token}; Max-Age=86400; Path=/`); // 把token保存到用户端的cookie当中
            res.status(200).json({ token, message: `登录成功` });
        } else {
            res.status(401).json({ message: '用户名或密码错误' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
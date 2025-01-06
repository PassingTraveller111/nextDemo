// pages/api/todo/getTaskList.js
import pool from '../../../lib/db';

export default async function handler(req, res) {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute(`SELECT * FROM taskList where table_id=${req.query.table_id}`);
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
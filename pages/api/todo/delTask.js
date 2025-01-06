// pages/api/todo/delTask.js
import pool from '../../../lib/db';

export default async function handler(req, res) {
    try {
        const connection = await pool.getConnection();
        console.log('req.query.task_id', req.query.task_id);
        const [rows, fields] = await connection.execute(`DELETE FROM taskList where task_id=${req.query.task_id}`);
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
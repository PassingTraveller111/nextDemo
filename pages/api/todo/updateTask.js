// pages/api/todo/updateTask.js
import pool from '../../../lib/db';

export default async function handler(req, res) {
    try {
        const connection = await pool.getConnection();
        const { task_id, task_status } = req.query;
        const [rows, fields] = await connection.execute(`
            UPDATE taskList
            SET task_status = '${task_status}'
            where task_id = ${task_id}
        `);
        connection.release();
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
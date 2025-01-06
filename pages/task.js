// pages/task.js
import React, {useState} from "react";
import axios from "axios";
import styles from "../styles/task.module.scss";
import moment from "moment";
import {useRouter} from "next/router";

const task = (props) => {
    const [taskList, setTaskList] = useState(props.data);
    const router = useRouter();
    const  getTaskList = async () => {
        const response = await axios.get(`http://localhost:3000/api/todo/getTaskList?table_id=${router?.query?.table_id}`);
        setTaskList(response.data);
    }
    const deleteTask = async (task_id) => {
        const response = await axios.delete(`http://localhost:3000/api/todo/delTask?task_id=${task_id}`);
        getTaskList();
    }
    const updateTask = async (task_id, task_status) => {
        const response = await axios.delete(`http://localhost:3000/api/todo/updateTask?task_id=${task_id}&&task_status=${task_status}`);
        console.log(response);
        getTaskList();
    }
    return <div className={styles.container}>
        <h1>Task</h1>
        {taskList.map(task => {
            return <div key={task.task_id} className={styles.item}>
                    <span className={styles.id}>id:{task.task_id}</span>
                    <span className={styles.content}>内容：{task.task_content}</span>
                    <span className={styles.deadline}>截止时间：{moment(task.deadline).format('YYYY年MM月DD日')}</span>
                    <select
                        value={task.task_status}
                        onChange={(e) => {
                            console.log('e',e.target.value);
                            updateTask(task.task_id, e.target.value);
                        }}
                    >
                        <option value="pending">进行中</option>
                        <option value="success">成功</option>
                        <option value="fail">失败</option>
                    </select>
                    <button onClick={() => {
                        deleteTask(task.task_id);
                    }}>删除</button>
            </div>
        })}
    </div>
}

export default task;

export async function getServerSideProps(context) {
    const { req, res, query } = context;
    const response = await axios.get(`http://localhost:3000/api/todo/getTaskList?table_id=${query?.table_id}`);
    const data = response.data;
    return {
        props: {
            data
        },
    };
}
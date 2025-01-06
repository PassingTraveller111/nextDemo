// pages/todo.js
import React, {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import moment from "moment";
import styles from '../styles/todo.module.scss'

const todo = (props) => {
    const [tableList, setTableList] = useState(props.data);
    const router = useRouter();
    return <div className={styles.container}>
        <h1>Todo</h1>
        {tableList.map(item => {
            return <li key={item.table_id} onClick={() => { router.push(`/task?table_id=${item.table_id}`); }}>
                <span>标题：{item.table_name}</span>
                <span>创建时间：{moment(item.create_time).format('YYYY-MM-DD HH:mm:ss')}</span>
            </li>
        })}
    </div>
}

export default todo;

export async function getServerSideProps(context) {
    const { req, res } = context;
    console.log('req,res',req,res);
    // 微任务用await关键字可以阻塞getServerSideProps的执行
    const response = await axios.get('http://localhost:3000/api/todo/getTableList');
    const data = response.data;
    console.log(data);
    return {
        props: {
            data
        }
    };
}
// pages/randomImg.js
import React, { useEffect, useState } from 'react';
import axios from "axios";

// export default () => {
//     const [imgUrl, setImgUrl] = useState('');
//     useEffect(() => {
//         axios.get('http://localhost:3000/api/getRandomImg').then(
//             res => {
//                 try {
//                     setImgUrl(res.data);
//                 } catch (e) {
//                     console.error(e);
//                 }
//             }
//         )
//     }, []);
//     return <>
//         I'm randomImg
//         <br/>
//         <img src={imgUrl} alt=""/>
//     </>;
// };

export default (props) => {
    const [imgUrl, setImgUrl] = useState('');
    const { data } = props;
    useEffect(() => {
        setImgUrl(data);
    }, [data,]);
    return <>
        I'm randomImg
        <br/>
        <img src={imgUrl} alt=""/>
    </>;
};

export async function getServerSideProps(context) {
    const { req, res } = context;
    console.log('req,res',req,res);
    // 微任务用await关键字可以阻塞getServerSideProps的执行
    const response = await axios.get('http://localhost:3000/api/getRandomImg');
    const data = response.data;
    console.log(data);
    setTimeout(() => {
        // 宏任务不会阻塞getServerSideProps的执行
        console.log('setTimeout执行', new Date().getTime());
    }, 10000)
    return {
        props: {
            data
        }
    };
}
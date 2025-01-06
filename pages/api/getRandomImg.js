import axios from "axios";

export default function handler(req, res) {
    try {
        const imageUrl = 'https://picsum.photos/200';
        axios({
            method: 'get',
            url: imageUrl,
            responseType: 'stream'
        }).then((response) => {
            res.setHeader('Content-Type', 'text/plain');
            console.log(response.data.responseUrl);
            res.send(response.data.responseUrl)
        }).catch((error) => {
            console.error(error);
            res.status(500).end('Internal Server Error');
        });
    } catch (error) {
        console.error(error);
        res.status(500).end('Internal Server Error');
    }
}
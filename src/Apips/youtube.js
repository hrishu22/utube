import axios from 'axios';
const KEY="AIzaSyBZWpFs3tBtkZwapLLVaYK7OFfnN1t5dSA"

export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
         part: 'snippet',
         maxResults: 5,
         key: KEY
     }
});
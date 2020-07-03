import axios from 'axios';
import MD5 from 'crypto-js/md5';

const url = 'https://gateway.marvel.com:443/v1/public/characters';
const ts = 1;
const privateKey = process.env.REACT_APP_PRIVATEKEY;
const apiKey = process.env.REACT_APP_APIKEY;
const hash = MD5(ts + privateKey + apiKey).toString();

const GetAll = async () => {
  try {
    const { data } = await axios.get(`${url}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=20`);
    return data.data
  } catch (error) {
    console.log('erro', error);
  };
};

export default GetAll;
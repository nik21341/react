import axios from 'axios';

const postr = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

export default postr;

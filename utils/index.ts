import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded : {name:string, sub:string, picture:string}= jwtDecode(response.credential) ;

  const {name, sub, picture} = decoded;
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture
  }

  await axios.post(`http://localhost:3000/api/auth`,user);

  addUser(user);
  console.log(response.credential)
  console.log(jwtDecode(response.credential));
};
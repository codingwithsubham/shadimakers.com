import io from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';
import { AUTH_TOKEN } from '../common/appConstants';
let socket;

const connectSocket = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token) {
    const decoded = jwtDecode(token);
    socket = io(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8081'
        : 'https://shadimakers.com/',
      {
        query: `user_id=${decoded?._id}`,
      }
    ).connect();
  }
};

export { socket, connectSocket };

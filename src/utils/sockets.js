import config from '../config';
import openSocket from 'socket.io-client';
const domain = config.domain;
const socket = openSocket(domain);

export const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(timestamp));
  socket.emit('subscribeToTimer', 1000);
}

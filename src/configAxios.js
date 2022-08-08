import config from './config';
const domain = config.domain;

export function get(route) {
  const serverReq = {
    method: 'get',
    url: `http://${domain}${route}`,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  }
  return serverReq;
}

export function post(route, data) {
  const serverReq = {
    method: 'post',
    url: `http://${domain}${route}`,
    withCredentials: true,
    data: data,
    headers: { 'Content-Type': 'application/json' }
  }
  return serverReq;
}

export function postWithHeaders(route, data, headers) {
  const serverReq = {
    method: 'post',
    url: `http://${domain}${route}`,
    withCredentials: true,
    data: data,
    headers: headers
  }
  return serverReq;
}

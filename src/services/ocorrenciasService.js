import axios from 'axios';
const baseUrl = 'http://localhost:7000/api';

const getAll = (type) => {
  const request = axios.get(`${baseUrl}/${type}`);
  return request.then(({ data }) => data);
};

const getOne = (type, id) => {
  const request = axios.get(`${baseUrl}/${type}/${id}`);
  return request.then(({ data }) => data);
}

const create = (type, newObject) => {
  const request = axios.post(`${baseUrl}/${type}`, newObject);
  return request.then(({ data }) => data);
};

const update = (type, id, newObject) => {
  const request = axios.put(`${baseUrl}/${type}/${id}`, newObject);
  return request.then(({ data }) => data);
};

const remove = (type, id) => {
  const request = axios.delete(`${baseUrl}/${type}/${id}`)
  return request.then(({ data }) => data)
}

const ocorrenciasService = {
  getAll,
  getOne,
  create,
  update,
  remove
};

export default ocorrenciasService;
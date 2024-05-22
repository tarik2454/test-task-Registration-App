import axios from 'axios';

export const BASE_URL = axios.create({
  baseURL: 'https://backend-test-task-registration-app.onrender.com/api/',
});

export const getEvents = async () => {
  const res = await BASE_URL.get('events');
  return res.data;
};

export const addParticipants = async data => {
  const res = await BASE_URL.post('participants', data);
  return res.data;
};

export const getParticipants = async eventId => {
  const res = await BASE_URL.get(`participants/${eventId}`);
  return res.data;
};

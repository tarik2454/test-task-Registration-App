import axios from 'axios';

export const BASE_URL = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const getEvents = async () => {
  const res = await BASE_URL.get('events');
  return res.data;
};

export const getParticipants = async () => {
  const res = await BASE_URL.get('participants');
  return res.data;
};

export const addParticipants = async data => {
  const res = await BASE_URL.post('participants', data);
  return res.data;
};

// export async function addContact(formData) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: formData,
//   };

//   const { data } = await axios.post(
//     `${BASE_URL}/api/application`,
//     formData,
//     options
//   );

//   return data;
// }

// export async function getWakeUpServer() {
//   await axios.get(`${BASE_URL}/api/application`);
// }

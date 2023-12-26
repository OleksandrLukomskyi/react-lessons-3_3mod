import axios from 'axios';

axios.defaults.baseURL = 'https://6589d38b324d417152598902.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async() => {
   const response = await axios.get('/materials');
   return response.data;
};

export const deleteMaterial = async id => {
   const response = await axios.delete(`/materials/${id}`);
   return response.data;
}

export const updateMaterial = async (fields) => {
const response = await axios.put(`/materials/${fields.id}`, fields);
return response.data;
}
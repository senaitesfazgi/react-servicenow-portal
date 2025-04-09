// src/services/serviceNowClient.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev301361.service-now.com/api/now/table/',  // Replace with your instance URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Use token for auth (once logged in)
  }
});

// Example function to fetch incidents from ServiceNow
export const getIncidents = async () => {
  try {
    const response = await instance.get('incident'); // Adjust the table name if needed
    return response.data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
};

export default instance;

import axios from 'axios';
import { API_DOMAIN } from '../Constants/SharedConstants';

const getToken = () => localStorage.getItem('token');

const buildQueryString = (params: {}) => {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `?${queryString}` : '';
};

export const axiosRequest = async (
  method: string,
  url: string,
  data = {},
  headers = {},
  params = {}
) => {
  const token = getToken();

  const queryString = buildQueryString(params);

  const config = {
    method,
    url: `${API_DOMAIN}${url}${queryString}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
      ...headers,
    },
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`Error during ${method} request to ${url}:`, error);
    throw error; // Throw error to be handled by the calling function
  }
};

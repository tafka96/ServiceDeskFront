import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  TICKETS: `${baseUrl}/tickets`,
  PRIORITIES: `${baseUrl}/tickets/priorities`,
  TICKET: `${baseUrl}/tickets/`,
  ADD_TICKET: `${baseUrl}/tickets/add`,
  UPDATE_TICKET: `${baseUrl}/tickets/update`,
  CLOSE_TICKET: `${baseUrl}/tickets/close/`,
};

function getFetchOptions() {
  return {
    headers: {
    mode: 'cors',
    'Content-Type': 'application/json'
    }
  };
}

export async function getData(url) {
  const fetchOptions = getFetchOptions();
  try {
    const response = await axios.get(url, fetchOptions);
    if (response.status === 200) {
      return { response: response.data, errorMessages: '', status: 200 }
    } else {
      return { response: null, errorMessages: response.errors, status: response.status };
    }
  } catch (error) {
    return { response: null, errorMessages: ['Error making API call'], status: 500 };
  }
}

export async function postData(url, data) {
  const fetchOptions = getFetchOptions();
  try {
    const response = await axios.post(url, data, fetchOptions);
    console.log(response);
    if (response.status === 200) {
      return { response: response.data, errorMessages: '', status: 200 }
    } else {
      return { response: null, errorMessages: response.errors, status: response.status };
    }
  } catch (error) {
    console.log(error);
    return { response: null, errorMessages: error.response.data.errors, status: 500 };
  }
}
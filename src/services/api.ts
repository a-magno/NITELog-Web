const API_VERSION = 1;

const API_BASE_URL =
import.meta.env.VITE_API_URL || "http://nitelogdev.discloud.app";

const USER_CREATE_URL = "users/"; /* sugestão para url "users/register" */
const USER_LOGIN_URL = "users/login";
const MEETING_CHECK_CREATE_URL = "meetings/" /* sugestão para url "meetings/create" */
const MEETINGS_LIST_URL = "meetings/list" /* TODO: criar url para lista Meetings */
const USER_LIST_URL = "" /* TODO: criar um rota para listagem dos usuários */

import axios, { AxiosError } from 'axios';
import type { GenericError, GenericResponse, LoginPayload, Meeting, MeetingsListResponse, RegisterPayload, User, UsersListResponse } from './interfaces';


function getApiVersion() {
  return `v${API_VERSION.toFixed(2)}`
}
  // loginUser
  
export async function loginUser(auth: LoginPayload) {
  axios({
    method: 'POST',
    url: `${API_BASE_URL}/${USER_CREATE_URL}`,
    data: {
      email: auth.email,
      password: auth.password,
    }
  }).then((response) => {
    return {
      code: 200,
      status: response.status,
      api_version: getApiVersion()
    }
  })
}

// registerUser
  
export async function registerUser(form: RegisterPayload): Promise<GenericResponse> {  
  // axios({
  //   method: 'POST',
  //   url: `${API_BASE_URL}/${USER_LOGIN_URL}`,
  //   data: {
  //     email: form.email,
  //     password: form.password,
  //     username: form.username
  //   }
  // }).then((response) => {
  //   return {
  //     code: 200,
  //     status: response.status,
  //     api_version: `v$`
  //   }
  // }).catch((error) => {
  //   return {
  //     code: 400,
  //     status: error,
  //   }
  // })
  
  try {
    const axiosResponse = await axios<GenericResponse>({
      method: 'POST',
      url: `${API_BASE_URL}/${USER_LOGIN_URL}`,
      data: {
        email: form.email,
        password: form.password,
        username: form.username
      }
    });
    
    const response = {
      code: axiosResponse.status,
      status: `Register Status:${axiosResponse.status}`,
      api_version: getApiVersion()
    }
    
    return response;
    
  } catch (error) {
    return { 
      code: 500,
      status: `Register Error:${error}`,
      api_version: getApiVersion()
    };
  }
  
}

// List Users

export async function getUsers(token: string): Promise<UsersListResponse>{
  let response = {
    code: 0, 
    status: ``,
    api_version: getApiVersion(),
    users_list: [] as User[], 
  }
  try {
    const axiosResponse = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/${USER_LIST_URL}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    response = {
      code: axiosResponse.status, 
      status: `Users List Status: ${axiosResponse.statusText}`,
      api_version: getApiVersion(),
      users_list: axiosResponse.data as User[]
    }
  } catch (error) {
    console.log(error)
  }
  return response;

}

// List Meetings
  
export async function getMeetings(token: string): Promise<MeetingsListResponse>{
  try {
    const axiosResponse = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/${MEETINGS_LIST_URL}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const response = {
      code: axiosResponse.status, 
      status: `Meetings List Status: ${axiosResponse.statusText}`,
      api_version: getApiVersion(),
      meetings_list: axiosResponse.data as Meeting[]
    }
    return response;
  } catch (error) {
    console.log(error)
  }
}

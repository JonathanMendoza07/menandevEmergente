import ApiConfig from "../Api.config";
import axios from 'axios';
import { useContext } from "react";
import Context from "../hooks/useContextProvider";

const GetMantPendientes = async (url) => {

  const response = await axios.get(ApiConfig.baseURL+url)
    .then(response => {
      return response.data.data;
    }).catch(err => {throw err; });

  return response;

};

const GetAllMantenimientos = async (url) => {

  const response = await axios.get(ApiConfig.baseURL+url)
    .then(response => {
      return response.data.data;
    }).catch(err => {throw err; });

  return response;

};

const GetMantById = async (url, idMant, token) => {

  const response = await axios.post(ApiConfig.baseURL+url+'/'+idMant, null, {
    headers:{
      "x-access-token": token
    }
  })
    .then(response => {
      return response.data.data;
    }).catch(err => {throw err; });

  return response;

};

// const GetAllComputadoras = async () => {}
// const GetAllComputadoras = async () => {}

export {
  GetMantPendientes,
  GetAllMantenimientos,
  GetMantById
};
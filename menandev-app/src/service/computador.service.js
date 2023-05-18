import ApiConfig from "../Api.config";
import axios from 'axios';

const GetAllComputadoras = async (url) => {

  const response = await axios.get(ApiConfig.baseURL + url)
    .then(response => {
      return response.data.data;
    }).catch(err => { throw err; });

  return response;

};

const GetComputerById = async (url, id) => {

  const response = await axios.post(ApiConfig.baseURL + url + '/' + id)
    .then(response => {
      return response.data.data;
    }).catch(err => { throw err; });

  return response;

}

// const GetAllComputadoras = async () => {}
// const GetAllComputadoras = async () => {}

export {
  GetAllComputadoras,
  GetComputerById,
};
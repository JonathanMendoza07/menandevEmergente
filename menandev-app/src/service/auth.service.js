import ApiConfig from "../Api.config";
import axios from 'axios';


const VerifyUserService = async (url, data, token) => {

  const response = await axios.post(ApiConfig.baseURL + url, data, {
    "x-access-token": token
  })
    .then(response => {
      const { data, token } = response.data;
      const { id, nameUser, typeUser } = data;

      return {
        token,
        data_basic: { id, nameUser, typeUser }
      };

    }).catch(err => {throw err});

  return response;
}

const SignInUserService = async (url, data) => {

  const response = await axios.post(ApiConfig.baseURL + url, data)
    .then(response => {
      return response.data;

    }).catch(err => {
      throw err;
    });

  return response;

}


export {
  VerifyUserService,
  SignInUserService
}
import React, { useEffect, useState } from 'react'
import Routing from '../routes';

const Context = React.createContext({});

export function ContextProvider({ children }) {

  let getDataLS = JSON.parse(localStorage.getItem("credential_user_load"));

  const [token, setToken] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [listOptions, setListOptions] = useState([]);
  const [update, setUpdate] = useState(false);

  let existToken = token !== "";

  const loadMenu = () => {
    const cleanTypeUser = typeUser.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      switch(cleanTypeUser){
        case 'tecnico de mantenimiento':
          setListOptions(Routing.tecnico.menu);
          break
        case 'administrador':
          setListOptions(Routing.administrador.menu);
          break
      }
  }

  useEffect(() => {

    if (getDataLS !== null) {
      const { nameUser, typeUser } = getDataLS.data_basic;     
      loadMenu();
      setToken(getDataLS.token);
      setNameUser(nameUser);
      return setTypeUser(typeUser);
    }

  }, []);

  useEffect(() => {
    const dataUpdate = JSON.parse(localStorage.getItem("credential_user_load"));

    if (dataUpdate !== null) {
      const { nameUser, typeUser } = getDataLS.data_basic;
      loadMenu();
      setToken(getDataLS.token_user);
      setNameUser(nameUser);
      return setTypeUser(typeUser);
    }
    setToken("");
    setNameUser("");
    return setTypeUser("");

  }, [update]);
  
  const updateContext = () => setUpdate(!update);

  return <Context.Provider value={
    {
      existToken,
      token,
      nameUser,
      typeUser,
      listOptions,
      setToken,
      setNameUser,
      setTypeUser,
      setListOptions,
      updateContext
    }
  }>{children}</Context.Provider>
}

export default Context;
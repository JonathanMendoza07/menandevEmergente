import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as IconSignOut} from '../../images/icon-sign-out.svg';
import Routing from '../../routes';
import Context from '../../hooks/useContextProvider';

const Header = () => {

  const { nameUser, typeUser, updateContext } = useContext(Context);
  const navigate = useNavigate();

  const logOutListener = () => {
    localStorage.removeItem("credential_user_load");
    updateContext();
    return setTimeout(() => navigate(Routing.Login.path, {replace:false}), 300);
  }

  return (
    <header className='m-5 flex h-14 gap-5'>
        <Link to={Routing.Home.path} className="flex items-center gap-5 p-3 bg-white rounded-xl w-1/6 justify-center shadow-lg">
          <Logo className='h-full w-auto' />
          <h1 className='text-orange font-bold text-'>MenanDev</h1>
        </Link>
        <nav className='flex items-center justify-between rounded-xl flex-auto bg-white py-3 px-5 h-full ml-2.5 shadow-lg'>
          <h3 className=' text-yellow font-bold text-sm'></h3>
          <div>
            <p className=' text-end font-medium text-xs'>{nameUser}</p>
            <p className=' text-end text-orange font-semibold text-xs'>{typeUser}</p>
          </div>
        </nav>
        <IconSignOut 
          onClick={() => logOutListener()}
          className='w-10 cursor-pointer stroke-orange  shadow-lg bg-white rounded-xl p-2.5 h-auto m-auto hover:bg-rose-500 hover:stroke-white' />
      </header>
  )
}

export default Header;
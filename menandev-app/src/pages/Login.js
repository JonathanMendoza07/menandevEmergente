import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Routing from '../routes';
import Context from '../hooks/useContextProvider';
import { SignInUserService } from '../service/auth.service';

import InputForm from '../components/common/InputForm';

import LayerLogin from '../images/layer-login.png';
import { ReactComponent as LogoApp } from '../images/logo.svg'

const Login = () => {

  const { existToken, updateContext } = useContext(Context);
  const navigateTo = useNavigate();

  const [isError, setisError] = useState(true);
  const [emailValue, setEmailField] = useState({error:true, data: ""});
  const [passwordValue, setpasswordValue] = useState({error: true, data: ""});

  useEffect(() => {    
    if(existToken) return navigateTo(Routing.Home.path);

    if(emailValue.error || passwordValue.error){
      setisError(true);
    }else{
      setisError(false);
    }
  }, [
    existToken, 
    emailValue, 
    passwordValue
  ]);  

  const handleSubmit = async() => {  
    if(!isError){

      const data = {
        email: emailValue.data,
        password: passwordValue.data
      };
      
      await SignInUserService('/auth/signin', data)
        .then(response => {
          const { data, token } = response;
          const { id, nameUser, typeUser } = data;

          localStorage.setItem("credential_user_load", JSON.stringify({
            token_user: token,
            data_basic: { id, nameUser, typeUser }
          }));
    
          updateContext();
          return navigateTo(Routing.Home.path);

        }).catch(err => {
          const { data, status } = err.response;

          if(status === 404){
            return alert(data.message);
          }
          return console.error(err.response);
        });

    }
  }

  if(existToken) return <></>;
  return (
    <>
      <main className='flex w-full h-full'>
        <section className=' w-3/5 relative bg-white'>
          <Link to={Routing.Home.path}><LogoApp className='fixed w-12 left-6 top-6' /></Link>
          <form className=' w-2/4 justify-center m-auto h-fit absolute inset-0 flex flex-col gap-5'>
            <h1 className=' font-bold text-2xl text-center text-orange leading-tight'>Iniciar Sesión para acceder</h1>
            <div>
              <InputForm typeField={'email'} labelText="Correo Electrónico" required={true} setData={setEmailField} upLabelField={false}/>
              <InputForm typeField={'password'} labelText="Contraseña" required={true} setData={setpasswordValue} upLabelField={false} />
            </div>
            <button 
              className='bg-orange text-white text-sm font-semibold h-8 rounded-md' 
              type='submit'
              onClick={(e) =>{ e.preventDefault(); handleSubmit();}}
              >Iniciar Sesión</button>
          </form>
          <div className=' text-black-500 text-opacity-50 text-base font-semibold w-fit h-fit absolute bottom-8 m-auto left-0 right-0'>Developed by MenanDev 2022</div>
        </section>
        <section className=' w-2/5 relative bg-white'>
          <div className='flex flex-col m-auto absolute inset-0 w-2/3 items-center h-fit z-10 gap-6'>
            <h1 className=' font-bold text-xl text-center text-orange'>Bienvenido, ¡Que gusto tenerte aqui!</h1>
            <p className=' text-orange text-center'>El trabajo en equipo nos enriquece como profesionales, dándonos perspectivas que tal vez nunca hubieramos pensado.</p>
          </div>
          <img 
            className='w-full h-full object-cover absolute inset-0 z-0'
            src={LayerLogin} 
            alt="" />
        </section>
      </main>
    </>
  )
}

export default Login;
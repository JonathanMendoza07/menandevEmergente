import React, { useEffect, useState } from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import { GetAllComputadoras } from '../../service/computador.service';
import ModalDetailComputer from '../Modal/ModalDetailComputer';

const ReportAllComputer = React.forwardRef((props, ref) => {

  const [computadoras, setComputadoras] = useState([]);

  useEffect(() => {
    
    GetAllComputadoras('/computadoras')
      .then(response => setComputadoras(response))
      .catch(err => err);
    
  }, [])

  return (
    <div className='w-full' ref={ref}>
      <div className="flex justify-between p-6 w-full">
        <Logo className=' h-11'/>
        <h1>Reporte de Computadoras</h1>
      </div>
      <div className='flex flex-col gap-6'>
        {
          computadoras.map((computer, index) => {
            return <ModalDetailComputer key={index} idComputer={computer.id} />
          })
        }
      </div>
    </div>
  );
});

export default ReportAllComputer;

import React, { useState } from 'react';
import InputForm from '../components/common/InputForm';

const ComputerNewView = () => {

  const [fieldNombreComp, setFieldNombreComp] = useState({error: true, data: ""});

  return (
    <div className='flex flex-col h-full gap-4'>
      <div className='flex w-full justify-between items-center'>
        <h2 className=' text-yellow font-bold'>Agregar Nuevo Computador</h2>
        <button className="bg-yellow hover:bg-amber-600 transition-all duration-100 rounded-lg px-3 text-white font-medium text-xs h-8">Guardar</button>
      </div>
      <div className='bg-white rounded-2xl w-full p-5'>
        <h3 className=' font-semibold text-orange text-sm'>Name Section</h3>
        <div className=' grid grid-cols-2'>
          <InputForm 
            typeField='text'
            labelText="Nombre del Computador"r
            required={true}
            setData={setFieldNombreComp}/>
        </div>
      </div>
    </div>
  );
}

export default ComputerNewView;

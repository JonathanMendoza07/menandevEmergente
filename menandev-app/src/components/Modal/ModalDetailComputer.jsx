import React, { useEffect, useState } from 'react';
import { GetComputerById } from '../../service/computador.service';

const ModalDetailComputer = ({ idComputer }) => {

  const [dataComputer, setdataComputer] = useState({
    nameComp: '',
    descripComp: '',
    numSerie: '',
    imageURL: '',
    encargado: '',
    typeComponent: {
      software: [],
      hardware: []
    }
  });


  useEffect(() => {

    GetComputerById('/computadoras', idComputer)
      .then(response => {
        return setdataComputer(response);
      })
      .catch(err => console.error(err));

  }, [idComputer]);


  const { nameComp, descripComp, numSerie, imageURL, encargado, typeComponent } = dataComputer;

  return (
    <div className='bg-white h-[75vh] overflow-auto snap-none px-6 py-5 flex border border-t border-b-0 border-l-0 border-r-0  border-black-500 border-opacity-50'>
      <div className='flex flex-col w-4/12 py-3 pl-3 pr-4 border-r-2 border-yellow'>
        <img
          className='w-full h-40 object-cover rounded'
          src={imageURL}
          alt="" />
        <div className='flex flex-col'>
          <h2 className=" font-bold text-lg line-clamp-4 my-2">{nameComp}</h2>
          <p className=' text-sm flex gap-1 flex-wrap'>
            <span className=' font-semibold'>Num. Serie:</span>
            <span>{numSerie}</span>
          </p>
          <p className=' text-sm flex gap-1 mt-1 flex-wrap'>
            <span className='text-orange font-semibold'>Persona a cargo:</span>
            <span className=' text-black-700 font-medium'>{encargado}</span></p>
        </div>
      </div>
      <div className='flex flex-col py-3 pl-4 pr-3 w-8/12'>
        <div className=' mb-4'>
          <h2 className=" font-semibold text-orange">Descripción</h2>
          <p className=' text-sm leading-tight'>{descripComp}</p>
        </div>
        <div className=' mb-4'>
          <h2 className=" font-semibold text-orange">Componentes</h2>
          <div className='ml-3'>
            <h2 className=" font-semibold text-yellow mb-2">Software</h2>
            <table className=' table-fixed ml-3 w-full'>
              <thead className='bg-black-500 bg-opacity-25 text-sm'>
                <tr>
                  <th className=' text-start p-2'>Componente</th>
                  <th className=' text-start p-2'>Categoria</th>
                  <th className=' text-start p-2'>Versión</th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {
                  typeComponent.software.map((item, index) => {
                    return <tr key={index}>
                      <td className='p-2'>{item.nameComponent}</td>
                      <td className='p-2'>{item.category}</td>
                      <td className='p-2'>{item.versionSoftware}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
          <div className='ml-3'>
            <h2 className=" font-semibold text-yellow mb-2">Hardware</h2>
            <table className=' table-auto ml-3 w-full'>
              <thead className='bg-black-500 bg-opacity-25 text-sm'>
                <tr>
                  <th className=' text-start p-2'>Componente</th>
                  <th className=' text-start p-2'>Categoria</th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {
                  typeComponent.hardware.map((item, index) => {
                    return <tr key={index}>
                      <td className='p-2'>{item.nameComponent}</td>
                      <td className='p-2'>{item.category}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetailComputer;

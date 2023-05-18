import React from 'react'
import Routing from '../../routes'
import ItemNavigatonOptions from '../common/ItemNavigatonOptions'

const NavigationOptions = ({listSubMenu}) => {

  const pathParent = listSubMenu.path;

  // if(listSubMenu.category.length === 0) return <></>;
  return (
    <div className='bg-white p-5 rounded-xl w-1/6 ml-2.5 mt-2.5 h-fit shadow-lg'>
      <div className=' text-orange font-semibold text-[10px]'>Opciones</div>
      <ul className='flex flex-col mt-5 gap-2'>
        {
          listSubMenu.category.map((option, index) => {
            const { name, path } = option;
            return <ItemNavigatonOptions key={index} path={pathParent + path} nameItem={name} />
          })
        }
      </ul>
    </div>
  )
}

export default NavigationOptions
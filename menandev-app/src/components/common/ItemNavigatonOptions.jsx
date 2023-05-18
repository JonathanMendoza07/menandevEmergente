import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const ItemNavigatonOptions = ({path, nameItem}) => {

  const isActive = useLocation().pathname === path;

  return (
    <li className='flex'>
      <NavLink to={path} className={ isActive
        ? "w-full border-orange border text-orange font-bold text-xs px-4 py-1.5 rounded-xl" 
        : "w-full border-orange text-black-500 hover:text-orange font-bold text-xs px-4 py-1.5 rounded-xl" 
      }>{nameItem}</NavLink>
    </li>
  )
}

export default ItemNavigatonOptions
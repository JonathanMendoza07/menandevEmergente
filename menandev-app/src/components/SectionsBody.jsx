import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Context from '../hooks/useContextProvider'
import NavigationBar from './Navigation/NavigationBar'
import NavigationOptions from './Navigation/NavigationOptions'

const SectionsBody = ({ children }) => {

  const { listOptions, updateContext } = useContext(Context);

  const location = useLocation();
  const pathCurrent = location.pathname;
  const [pathParentSelect, setPathParentSelect] = useState("");

  useEffect(() => {

    updateContext();
    listOptions.map(itemMenu => {
      if(pathCurrent.startsWith(itemMenu.path)) return setPathParentSelect(itemMenu.path);
    })  

  }, [listOptions, pathParentSelect]);

  return (
    <main className='mx-5 flex h-full gap-5'>
      <NavigationBar listaOptionsMenu={listOptions} setPathSelect={setPathParentSelect} />
      {
        listOptions.map((itemMenu, index) =>{
          if(itemMenu.path.startsWith(pathParentSelect) && pathCurrent !== '/'){
            return <NavigationOptions key={index} listSubMenu={itemMenu} />
          }
        })
      }
      <div className='flex-auto w-4/6 flex flex-col h-[85%]'>
        {children}
      </div>
    </main>    
  )
}

export default SectionsBody
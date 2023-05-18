import React, { useEffect, useState } from 'react'
import ItemNavigationBar from '../common/ItemNavigationBar';

const NavigationBar = ({ listaOptionsMenu, setPathSelect }) => {

  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if(listaOptionsMenu) return setUpdate(!update);
  }, [listaOptionsMenu]);

  return (
    <aside className='flex flex-col items-center w-1/6 h-f justify-center mt-2.5 mb-5 relative'>
      <ul className=' flex-auto flex flex-col gap-3 h-full w-full'>
        {
          listaOptionsMenu.map((option, index) => {
            const { name, path, category } = option;

            return <ItemNavigationBar 
              key={index} 
              path={path} 
              nameItem={name} 
              setPathSelect={setPathSelect}
              />
          })
        }
      </ul>
      <div className=' font-medium text-center text-black-700 text-opacity-50 text-sm leading-tight'>Development by MenanDev 2022</div>
      <div className='w-[.5px] h-[70%] rounded bg-orange absolute right-0 top-0 bottom-0 m-auto translate-x-3.5 bg-opacity-40'></div>
    </aside>
  )

}

export default NavigationBar;
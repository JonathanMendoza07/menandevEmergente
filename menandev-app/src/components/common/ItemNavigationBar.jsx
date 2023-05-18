import { NavLink, useLocation } from "react-router-dom"

const ItemNavigationBar = ({ path, nameItem, setPathSelect }) => {

  const isActive = (useLocation().pathname).startsWith(path);

  return (
    <li className='flex bg-white rounded-lg shadow-md'>
      <NavLink
        to={path}
        onClick={() => setPathSelect(path)}
        className={ isActive 
          ? "text-orange bg-orange bg-opacity-10 w-full rounded-lg px-4 py-2.5 font-semibold text-sm"
          : "w-full rounded-lg px-4 py-2.5 text-black-600 hover:text-orange font-semibold text-sm"
        }
      >{nameItem}
      </NavLink>
    </li>
  )
}

export default ItemNavigationBar
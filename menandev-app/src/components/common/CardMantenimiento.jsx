import { BsArrowRight } from 'react-icons/bs'

const CardMantenimiento = (props) => { 

  const { 
    idMant,
    encargado,
    nameComputer,
    estado,
    setIdForShowDetail,
    openModalDetail,
    openModalDetailValue 
  } = props;

  const viewDetailsListener = () => {

    openModalDetail(!openModalDetailValue);
    setIdForShowDetail(idMant);

  }

  return (
    <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col gap-1  w-full h-full'>
      <p className={`font-semibold text-xs ${estado === 'Pendiente' ? "text-orange" : "text-green"}`}>Mantenimiento {estado}</p>
      <div className='flex flex-col gap-2'>
        <h2 className=" font-bold text-base line-clamp-2">{nameComputer}</h2>
        <p className=' text-xs flex gap-1'><span className=' font-semibold'>Responsable:</span><span>{encargado}</span></p>
      </div>
      <button 
        onClick={viewDetailsListener}
        className='mt-2 flex gap-2 items-center w-fit hover:bg-yellow hover:bg-opacity-20 px-2 py-1 rounded outline-none transition-all duration-200'
      >
        <p className=' text-yellow font-semibold text-sm underline'>Ver Detalles</p>
        <BsArrowRight className=' stroke-1 stroke-yellow text-lg' />
      </button>
    </div>
  );
}

export default CardMantenimiento;

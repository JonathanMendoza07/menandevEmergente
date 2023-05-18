import { BsArrowRight } from 'react-icons/bs'

const CardComputador = (props) => {

  const {
    idComputer,
    imageURL,
    nameProduct,
    numSerie,
    setIdForShowDetails,
    openModalDetailValue,
    openModalDetail,
  } = props;

  const viewDetailsListener = () => {
    openModalDetail(!openModalDetailValue);
    setIdForShowDetails(idComputer);
  }
  
  return (
    <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col gap-3 w-full h-full'>
      <img 
      className='w-full max-h-40 object-cover rounded'
        src={imageURL}
        alt="" />
      <div className='flex flex-col gap-2'>
        <h2 className=" font-bold text-sm line-clamp-4">{nameProduct}</h2>
        <p className=' text-xs flex gap-1'><span className=' font-semibold'>Num. Serie:</span><span>{numSerie}</span></p>
      </div>
      <button 
        onClick={viewDetailsListener}
        className='flex gap-2 items-center w-fit hover:bg-orange hover:bg-opacity-20 px-2 py-1 rounded outline-none transition-all duration-200'
      >
        <p className=' text-orange font-semibold text-sm underline'>Ver Computador</p>
        <BsArrowRight className=' stroke-1 stroke-orange text-lg' />
      </button>
    </div>
  )
}

export default CardComputador
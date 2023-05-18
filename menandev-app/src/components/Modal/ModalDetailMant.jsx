import { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Context from "../../hooks/useContextProvider";
import { GetMantById } from "../../service/mantenimiento.service";


const ModalDetailMant = (props) => {

  const { token } = useContext(Context);
  const { idMantShow, setOpenModal } = props;
  
  const componentPrint = useRef();  
  const [dataMant, setDataMant] = useState([]);

  useEffect(() => {

    GetMantById('/mantenimientos', idMantShow, token)
      .then(response => {
        return setDataMant(response);
      })
      .catch(err => console.error(err));

  }, [idMantShow]);

  const handlePrint = useReactToPrint({
    content: () => componentPrint.current,
  });
  
  return (
    <>
      <div className='flex-auto p-5 flex flex-col gap-5 bg-bg' ref={componentPrint}>

        <div className=' flex justify-between items-start gap-7'>
          <h1 className=' font-bold text-xl text-orange'>{dataMant.nameComputer}</h1>
          <div className={`border rounded-lg text-xs px-2 py-1 font-semibold 
            ${dataMant.estado == 'Pendiente' ? "border-orange text-orange" : "border-green text-green"}`}
          >{dataMant.estado}</div>
        </div>
        <div className='px-3'>
          <p className='text-sm flex gap-2 mb-2'>
            <span className=' font-semibold text-orange'>Persona encargada:</span>
            <span className=' text-black-700'>{dataMant.encargado}:</span>
          </p>
          <p className='text-sm text-black-700 flex gap-2'>
            <span className=' font-semibold'>Fecha de apertura:</span>
            <span className=' '>{dataMant.dateMant}</span>
          </p>
        </div>
        <p className='text-sm gap-2 flex flex-col'>
          <span className=' font-semibold text-yellow text-base'>Descripción de Mantenimiento:</span>
          <span className=' font-medium'>{dataMant.descripcion}</span>
        </p>

        {
          dataMant.userMantDone && <div className={`flex ml-auto items-center border rounded-lg text-sm px-2 py-1 font-semibold ${"border-green text-green"}`}>
            Mantenimiento realizado por
            <span className=' font-bold text-base text-green ml-1'>{dataMant.userMantDone}</span>
          </div>
        }

      </div>

      <div className='py-5 px-7 flex justify-between flex-row-reverse items-center bg-white'>
        {
          (!dataMant.userMantDone && dataMant.typeUser === "Tecnico") &&  <button
            className='w-fit px-4 py-2 bg-green bg-opacity-30 text-green font-semibold rounded-xl hover:bg-green hover:bg-opacity-100 hover:text-white transition-all duration-300'
          >Marcar como realizado por mi</button>
        }
        <button  
          onClick={handlePrint}
          className="bg-orange hover:bg-rose-900 transition-all duration-100 rounded-lg px-4 py-2 text-white font-medium text-xs"
        >
          Descargar
        </button>
      </div>

    </>
  );
}

export default ModalDetailMant;

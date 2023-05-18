import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { GetAllComputadoras } from '../service/computador.service';

import CardComputador from '../components/common/CardComputador';
import ModalContainer from '../components/Modal/ModalContainer';
import ModalDetailComputer from '../components/Modal/ModalDetailComputer';
import ReportAllComputer from '../components/Report/ReportAllComputer';

const Computadoras = () => {

  const [listPC, setListPC] = useState([]); 
  const componentReport = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [idForShowDetails, setIdForShowDetails] = useState("");

  useEffect(() => {
    
    GetAllComputadoras('/computadoras')
      .then(response => setListPC(response))
      .catch(err => err);
    
  }, [])


  const handlePrintReport = useReactToPrint({
    content: () => componentReport.current,
  })

  return (
    <>
      <div className='hidden'><ReportAllComputer ref={componentReport} /></div>

      <ModalContainer titleModal="Detalle de Computadora" isOpenModal={openModal} setOpenModal={setOpenModal}>
        <ModalDetailComputer idComputer={idForShowDetails} />
      </ModalContainer>

      <div className=" h-full flex flex-col">
        <div className="flex justify-end mb-5 h-9 gap-4">
          <button 
            onClick={handlePrintReport}
            className="bg-orange hover:bg-rose-900 transition-all duration-100 rounded-lg px-3 text-white font-medium text-xs"
          >
            Descargar Reporte General
          </button>
        </div>
        <div className=" overflow-auto pb-6">
          <div className=" grid grid-cols-3 gap-5">
            { 
              listPC.map((computador) => {
                const { id, imageURL, name, numSerie } = computador;

                return <CardComputador 
                  key={id} 
                  idComputer={id}
                  imageURL={imageURL} 
                  nameProduct={name} 
                  numSerie={numSerie}
                  setIdForShowDetails={setIdForShowDetails}
                  openModalDetailValue={openModal}
                  openModalDetail={setOpenModal}
                />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Computadoras;

import { useEffect, useState } from "react";
import CardMantenimiento from "../components/common/CardMantenimiento";
import ModalContainer from "../components/Modal/ModalContainer";
import ModalDetailMant from "../components/Modal/ModalDetailMant";
import { GetMantPendientes } from "../service/mantenimiento.service";

const MantenimientosPendientes = () => {

  const [listMantPend, setListMantPend] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idForShowDetails, setIdForShowDetails] = useState("");

  useEffect(() => {
  
    GetMantPendientes('/mantenimientos/pendient')
      .then(response => setListMantPend(response))
      .catch(err => console.error(err));
  
  }, [])

  return (
    <>

      <ModalContainer titleModal="Detalle de Mantenimiento" isOpenModal={openModal} setOpenModal={setOpenModal}>
        <ModalDetailMant idMantShow={idForShowDetails} />
      </ModalContainer>
      <div className=" h-full flex flex-col">
        <div className=" overflow-auto pb-6">
          <div className=" grid grid-cols-2 gap-5">
            { 
              listMantPend.map(mant => {
                const { idMant, encargado, nameComputer, estado } = mant;

                return <CardMantenimiento 
                  key={idMant} 
                  idMant={idMant}
                  encargado={encargado} 
                  nameComputer={nameComputer} 
                  estado={estado}
                  setIdForShowDetail={setIdForShowDetails}
                  openModalDetailValue={openModal} 
                  openModalDetail={setOpenModal} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default MantenimientosPendientes;

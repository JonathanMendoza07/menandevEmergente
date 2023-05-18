import { MdClose } from 'react-icons/md';

const ModalContainer = ({isOpenModal, setOpenModal, titleModal, children}) => {

  if(!isOpenModal) return <></>;
  return (
    <div className=" fixed inset-0 bg-black-500 bg-opacity-40 z-[60] items-center justify-center">

      <div className=" w-fit max-w-4xl h-fit bg-white rounded-md flex flex-col overflow-hidden absolute m-auto inset-0">

        <div className="py-5 px-7 flex justify-between items-center border-r-text-700 border-opacity-60 bg-white shadow-sm">
          <h3 className=' text-sec-900 font-semibold text-lg'>{titleModal}</h3>
          <MdClose
            onClick={() => {
              setOpenModal(!isOpenModal);
            }}
            className=' fill-sec-900 w-7 h-7 cursor-pointer' />
        </div>

        {children}        
      </div>
    </div>
  );
}

export default ModalContainer;

import React from 'react';
import CardMantenimiento from '../components/common/CardMantenimiento';

const HistoryMant = () => {
  return (
    <div className=" h-full flex flex-col">
      <div className="flex justify-end mb-5 h-9 gap-4">
        <button className="bg-orange hover:bg-rose-900 transition-all duration-100 rounded-lg px-3 text-white font-medium text-xs">Descargar Reporte General</button>
        <button className="bg-yellow hover:bg-amber-600 transition-all duration-100 rounded-lg px-3 text-white font-medium text-xs">Imprimir Reporte General</button>
      </div>
      <div className=" overflow-auto pb-6">
        <div className=" grid grid-cols-2 gap-5">
          <CardMantenimiento />
          <CardMantenimiento />
          <CardMantenimiento />
          <CardMantenimiento />
          <CardMantenimiento />
          <CardMantenimiento />
        </div>
      </div>
    </div>
  );
}

export default HistoryMant;

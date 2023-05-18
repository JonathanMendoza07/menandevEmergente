import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import SectionsBody from './components/SectionsBody';
import Context, { ContextProvider } from './hooks/useContextProvider';
import Computadoras from './pages/Computadoras';
import ComputerNewView from './pages/ComputerNewForm';
import Home from './pages/Home';

import Login from './pages/Login';
import TodosMantenimientos from './pages/MantAlls';
import HistoryMant from './pages/MantHistory';
import MantenimientosPendientes from './pages/MantPendient';
import Routing from './routes';

function RouteOfPortal({ component: Component }) {
  const { existToken } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!existToken) return navigateTo(Routing.Login.path);
  }, [existToken]);

  if(!existToken) return <></>;
  return (
    <div className='flex flex-col h-full w-full'>
      <Header />
      <SectionsBody>
        <Component />
      </SectionsBody>
    </div>
  )
}


function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          {/* <Route path='*' element={<RouteOfPortal component={Home} />} /> */}
          <Route path={Routing.Home.path} element={<RouteOfPortal component={() => <div className='w-full h-full flex items-center justify-center'><h1 className=' font-bold text-lg'>Seleccione una opción</h1></div>} />} />
          <Route path={Routing.Login.path} element={<Login />} />
          
          {/* TECNICO DE MANTENIMIENTO */}
          <Route path={Routing.MantMainTec.path}>
            <Route path={Routing.MantAll.path} element={<RouteOfPortal component={() => <div className='w-full h-full flex items-center justify-center'><h1 className=' font-bold text-lg'>Seleccione una opción</h1></div>} />} />
            <Route path={Routing.MantPendient.path} element={<RouteOfPortal component={MantenimientosPendientes} />} />
            {/* <Route path={Routing.MantHistory.path} element={<RouteOfPortal component={HistoryMant} />} /> */}
          </Route>

          {/* ADMINISTRADOR */}
          <Route path={Routing.ComputerMainAdmin.path}>
            <Route path={Routing.ComputerAll.path} element={<RouteOfPortal component={Computadoras} />} />
            <Route path={Routing.ComputerNew.path} element={<RouteOfPortal component={ComputerNewView} />} />            
          </Route>          
          <Route path={Routing.MantMainAdmin.path}>
            <Route path={Routing.MantAll.path} element={<RouteOfPortal component={TodosMantenimientos} />} />
            <Route path={Routing.MantPendient.path} element={<RouteOfPortal component={MantenimientosPendientes} />} />
            <Route path={Routing.MantPendient.path+'/:id'} element={<RouteOfPortal component={MantenimientosPendientes} />} />            
          </Route>

        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

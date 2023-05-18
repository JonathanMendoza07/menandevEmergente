const TecMant = {

}

const Routing = {
  Home: { name: "Inicio", path: '/', title: 'Home | MenanDev' },
  Login: { name: "Login", path: '/signin', title: 'Iniciar Sesión | MenanDev' },

  UserMainAdmin: { name: "Usuarios", path: '/usuarios', title: 'Usuarios | MenanDev' },
  UserList: { name: "Lista de usuarios", path: '', title: 'List. Usuarios | MenanDev' },
  UserNew: { name: "Agregar usuario", path: 'new', title: 'Usuarios | MenanDev' },

  MantMainTec: { name: "Tecnico Mant.", path: '/mant/tec', title: 'Tecnico Mant. | MenanDev' },
  MantMainAdmin: { name: "Administrador", path: '/mant/adm', title: 'Tecnico Mant. | MenanDev' },
  MantAll: { name: "Todos los mantenimientos", path: '', title: 'Mantenimientos | MenanDev' },
  MantPendient: { name: "Mantenimientos Pendientes", path: 'pendientes', title: 'Mant. Pendientes | MenanDev' },
  MantHistory: { name: "Historial de Mantenimientos", path: 'historial', title: 'Historial Mant. | MenanDev' },

  ComputerMainAdmin: { name: "Computadoras", path: '/computadoras', title: 'Computadoras | MenanDev' },
  ComputerAll: { name: "Todas las computadoras", path: '', title: 'Mantenimientos | MenanDev' },
  ComputerNew: { name: "Agregar nuevo computador", path: 'new', title: 'Mant. Pendientes | MenanDev' },


  tecnico: {

    menu: [
      {
        name: "Mantenimientos",
        path: '/mant/tec',
        title: 'Mantenientos | MenanDev',
        category: [          
          { name: "Mantenimientos Pendientes", path: '/pendientes', title: 'Mant. Pendientes | MenanDev' },
          // { name: "Historial de Mantenimientos", path: '/historial', title: 'Historial Mant. | MenanDev' },
        ]
      },
    ],

  },

  administrador: {

    menu: [
      // {
      //   name: "Usuarios",
      //   path: '/usuarios',
      //   title: 'Usuarios | MenanDev',
      //   category: [
      //     { name: "Lista de usuarios", path: '', title: 'Usuarios | MenanDev' },
      //     { name: "Agregar usuario", path: '/new', title: 'Usuarios | MenanDev' },
      //   ]
      // },
      {
        name: "Mantenimientos",
        path: '/mant/adm',
        title: 'Mantenimientos | MenanDev',
        category: [
          { name: "Todos los mantenimientos", path: '', title: 'Mantenimientos | MenanDev' },
          { name: "Mantenimientos pendientes", path: '/pendientes', title: 'Mant. Pendientes | MenanDev' },
        ]
      },
      {
        name: "Computadoras",
        path: '/computadoras',
        title: 'Computadoras | MenanDev',
        category: [
          { name: "Todas las computadoras", path: '', title: 'Mantenimientos | MenanDev' },
          { name: "Agregar nuevo computador", path: '/new', title: 'Mant. Pendientes | MenanDev' },
        ]
      },
    ],

  }

}

export default Routing;
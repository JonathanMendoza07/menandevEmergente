# Portal MenanDev API
#### Microsoft SQL Server - Node JS

## ¿Qué se requiere?
- [IDE para JS]('https://code.visualstudio.com/download')
- [Node JS](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-au/sql-server/sql-server-downloads)
- [SQL Server Management Studio](https://docs.microsoft.com/en-gb/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)

## Configuración inicial
Dirigase a su barra de herramientas de Windows y busque el ***Administrador de configuración de SQL Server***
Una vez abierto, cliquear en:
- Configuración de Red de SQL Server.
- Protocolos de (Nombre de tu instancia de SQL Server)
- TCP/IP

El TCP/IP debe estar habilitado y en la ventana de dialogo, clickeamos en **_Direcciones IP_** luego baje hasta donde dice IPAII y agregar el puerto 1433

Aplique cambios y reinicie los servicios de SQL Server. 

#### Variables de entorno
Para este punto debes de crear un archivo **.env** para colocar tus variables de entorno, las cuales son aplicadas las siguientes:
```
PORT= 5050
HOST = "http://127.0.0.1"

# credentials Database
DB_USER=''
DB_PASSWORD=''
DB_SERVER='localhost'
DB_NAME=''
```


Posteriormente en el nuestro servidor ejecutamos los comandos:
```sh
$ npm install
```
**Inicializar Proyecto:**
Proyecto en producción: `npm start`
Proyecto en desarrollo: `npm run dev`
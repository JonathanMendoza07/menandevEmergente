/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2008                    */
/*==============================================================*/

if exists (select 1
            from  sysobjects
           where  id = object_id('Categoria')
            and   type = 'U')
   drop table Categoria
go


if exists (select 1
            from  sysobjects
           where  id = object_id('Computadora')
            and   type = 'U')
   drop table Computadora
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ComputadoraProducto')
            and   type = 'U')
   drop table ComputadoraProducto
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Mantenimiento')
            and   type = 'U')
   drop table Mantenimiento
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Marca')
            and   type = 'U')
   drop table Marca
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Producto')
            and   type = 'U')
   drop table Producto
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TipoUsuario')
            and   type = 'U')
   drop table TipoUsuario
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Usuario')
            and   type = 'U')
   drop table Usuario
go

/*==============================================================*/
/* Table: Categoria                                             */
/*==============================================================*/
create table Categoria (
   cat_id               int     not null    identity(1,1),
   cat_name             varchar(255)         null,
   cat_tipo_componente  varchar(255)         null,
   constraint PK_Categoria primary key nonclustered (cat_id)
)
go

/*==============================================================*/
/* Table: Marca                                                 */
/*==============================================================*/
create table Marca (
   marca_id          int     not null    identity(1,1),
   marca_name        varchar(255)         null,
   constraint PK_Marca primary key nonclustered (marca_id)
)
go

/*==============================================================*/
/* Table: TipoUsuario                                       */
/*==============================================================*/
create table TipoUsuario (
   tipo_user_id         int     not null    identity(1,1),
   tipo_user_name       varchar(50)                 null,
   constraint PK_TipoUsuario primary key nonclustered (tipo_user_id)
)
go

/*==============================================================*/
/* Table: Usuario                                               */
/*==============================================================*/
create table Usuario (
   user_id              int     not null    identity(1,1),
   user_tipo_user_id    int                  not null,
   user_nombre          varchar(255)         null,
   user_apellido        varchar(255)         null,
   user_genero          varchar(255)         null,
   user_correo          varchar(255)         null,
   user_telefono        char(10)             null,
   user_cedula          char(10)             null,
   user_password        text                 null,
   PRIMARY KEY (user_id),
   constraint FK_TipoUsuario_User FOREIGN KEY (user_tipo_user_id) REFERENCES TipoUsuario(tipo_user_id)
)
go

/*==============================================================*/
/* Table: Computadora                                           */
/*==============================================================*/
create table Computadora (
   comp_id               int     not null    identity(1,1),
   comp_marca_id         int                 null,
   comp_responsable      int                 null,
   comp_name             text                 null,
   comp_descrip          text                 null,
   comp_num_serie        varchar(50)          null,
   comp_modelo           varchar(50)         null,
   comp_image_url        text                null,
   PRIMARY KEY (comp_id),
   constraint FK_Marca_comp FOREIGN KEY (comp_marca_id) REFERENCES Marca(marca_id),
   constraint FK_Responsable FOREIGN KEY (comp_responsable) REFERENCES Usuario(user_id)
)
go

/*==============================================================*/
/* Table: Producto                                              */
/*==============================================================*/
create table Producto (
   prod_id              int     not null    identity(1,1),
   prod_marca_id        int                  not null,
   prod_cat_id          int                  not null,
   prod_name            text                 null,
   prod_descripcion     text                 null,
   prod_version         varchar(255)         null,
   PRIMARY KEY (prod_id),
   constraint FK_Marca_prod FOREIGN KEY (prod_marca_id) REFERENCES Marca(marca_id),
   constraint FK_Category_prod FOREIGN KEY (prod_cat_id) REFERENCES Categoria(cat_id)
)
go

/*==============================================================*/
/* Table: ComputadoraProducto                                   */
/*==============================================================*/
create table ComputadoraProducto (
   comp_prod_id         int     not null    identity(1,1),
   comp_prod_computador int                  not null,
   comp_prod_Producto   int                  not null,
   PRIMARY KEY (comp_prod_id),
   constraint FK_Computador_xprod FOREIGN KEY (comp_prod_computador) REFERENCES Computadora(comp_id),
   constraint FK_Producto_xcomp FOREIGN KEY (comp_prod_Producto) REFERENCES Producto(prod_id)
)
go

/*==============================================================*/
/* Table: Mantenimiento                                         */
/*==============================================================*/
create table Mantenimiento (
   mant_id              int     not null    identity(1,1),
   mant_user_id         int                  null,
   mant_comp_id         int                  null,
   mant_date            datetime             null,
   mant_descrip         text                 null,
   mant_estado          varchar(128)         null,
   PRIMARY KEY (mant_id),
   constraint FK_User_Mant FOREIGN KEY (mant_user_id) REFERENCES Usuario(user_id),
   constraint FK_Computador_Mant FOREIGN KEY (mant_comp_id) REFERENCES Computadora(comp_id)
)
go
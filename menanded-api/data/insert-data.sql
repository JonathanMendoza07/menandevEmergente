/*==============================================================*/
/* Table: TipoUsuario                                       */
/*==============================================================*/
INSERT INTO TipoUsuario (tipo_user_name) VALUES ('Tecnico de Mantenimiento');
INSERT INTO TipoUsuario (tipo_user_name) VALUES ('Administrador');
INSERT INTO TipoUsuario (tipo_user_name) VALUES ('Desarrollador');


/*==============================================================*/
/* Table: Usuario                                               */
/*==============================================================*/
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Timmy', '1', 'Flint', 'Male', 'tflint0@tuttocitta.it', '6601177040', '6162250601', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Becka', '1', 'Gayton', 'Female', 'bgayton1@geocities.jp', '8648012570', '6768876724', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Clarance', '2', 'Macbeth', 'Male', 'cmacbeth2@storify.com', '4504990652', '5254627670', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Norton', '3', 'Orthmann', 'Genderqueer', 'northmann3@sitemeter.com', '3418237681', '8116402420', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Vivienne', '2', 'Rogerson', 'Female', 'vrogerson4@scribd.com', '8788441741', '4928865294', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Clarinda', '3', 'Connachan', 'Female', 'cconnachan5@networkadvertising.org', '4175053891', '413930157', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Dannie', '1', 'De Haven', 'Male', 'ddehaven6@prweb.com', '8370609538', '6758647749', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Gustie', '1', 'Bachnic', 'Female', 'gbachnic7@nsw.gov.au', '5970188190', '7528187356', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Sharleen', '1', 'Hitzke', 'Female', 'shitzke8@youtu.be', '3804226000', '6247897286', '$2a$12$G4u7J/scURNpQiIM0dS6K.g8HHE1cCXNHGzv3v8votX2z5cb.PmXa');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Colene', '3', 'Hinz', 'Female', 'chinz9@nih.gov', '8476000987', '892262028', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Cristionna', '3', 'Boam', 'Non-binary', 'cboam0@earthlink.net', '6428742675', '5355438210', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Foss', '3', 'Seely', 'Male', 'fseely1@dmoz.org', '2433805945', '8825417969', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Agnella', '3', 'Cullrford', 'Agender', 'acullrford2@yandex.ru', '2359067796', '3601619601', '');
INSERT INTO Usuario (user_nombre,user_tipo_user_id,user_apellido,user_genero,user_correo,user_telefono,user_cedula,user_password) VALUES ('Hermon', '3', 'Szwarc', 'Male', 'hszwarc3@google.de', '1998927652', '6864563065', '');

/*==============================================================*/
/* Table: Categoria                                               */
/*==============================================================*/
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Antivirus', 'Software');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Sistema Operativo', 'Software');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Aplicación', 'Software');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Almacenamiento', 'Hardware');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Procesador', 'Hardware');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Monitor', 'Hardware');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Periferico', 'Hardware');
INSERT INTO Categoria (cat_name,cat_tipo_componente) VALUES ('Mainboard', 'Hardware');

/*==============================================================*/
/* Table: Marca                                               */
/*==============================================================*/
INSERT INTO Marca (marca_name) VALUES ('Kaspersky');
INSERT INTO Marca (marca_name) VALUES ('Eset');
INSERT INTO Marca (marca_name) VALUES ('Microsoft');
INSERT INTO Marca (marca_name) VALUES ('Linux');
INSERT INTO Marca (marca_name) VALUES ('Dropbox');
INSERT INTO Marca (marca_name) VALUES ('Postman');
INSERT INTO Marca (marca_name) VALUES ('Western');
INSERT INTO Marca (marca_name) VALUES ('Toshiba');
INSERT INTO Marca (marca_name) VALUES ('Kingston');
INSERT INTO Marca (marca_name) VALUES ('Intel');
INSERT INTO Marca (marca_name) VALUES ('AMD');
INSERT INTO Marca (marca_name) VALUES ('LG');
INSERT INTO Marca (marca_name) VALUES ('Dell');
INSERT INTO Marca (marca_name) VALUES ('Asus');
INSERT INTO Marca (marca_name) VALUES ('Lenovo');
INSERT INTO Marca (marca_name) VALUES ('Acer');
INSERT INTO Marca (marca_name) VALUES ('HP');
INSERT INTO Marca (marca_name) VALUES ('Logitech');
INSERT INTO Marca (marca_name) VALUES ('Astro');
INSERT INTO Marca (marca_name) VALUES ('Hyper X');

/*==============================================================*/
/* Table: Producto                                               */
/*==============================================================*/
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('1', '1', 'Kaspersky Anti-Virus', '', 'v2022.05.10.391');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('1', '1', 'Kaspersky Internet Security', '', 'v21.3.10.391');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('2', '1', 'ESET Endpoint Antivirus', '', 'v9.1.2051.0  ');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('2', '1', 'ESET Internet Security', '', 'v15.0.16.0');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('3', '2', 'Windows 10 Pro', '', 'v22000.795');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('3', '2', 'Windows 10 Enterprise', '', 'v21H200.14');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('4', '2', 'Ubuntu', '', 'v22.04 LTS');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('3', '3', 'OneDrive', '', 'v22.022.0130.0001');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('3', '3', 'Office 365', '', 'v.2022');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('5', '3', 'Dropbox Cloud Service', '', 'v153.4.3932');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('6', '3', 'Postman', '', 'v7.0.9');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('9', '4', 'Disco Solido Ssd Kingston 480gb', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('8', '4', 'Disco Duro Toshiba 2.5 Hdd 1tb 1000gb', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('7', '4', 'Disco Duro Wester Digital Blue 2tb Disco Mecanico Hdd Wd', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('10', '5', 'Intel® Core™ i7-12650HX', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('10', '5', 'Intel® Core™ i7-1065G7', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('10', '5', 'Intel® Core™ i9-12900HX', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('11', '5', 'AMD Ryzen™ serie 7000', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('12', '6', 'Monitor LG FreeSync IPS Gaming 16:9', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('14', '6', 'Monitor ASUS Eye Care IPS', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('13', '6', 'Monitor Dell P2219H Ultrathin Bezel IPS', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('19', '7', 'Auriculares ASTRO Gaming A10', 'Auriculares ASTRO Gaming A10 , con cable de 3,5 mm y micrófono Boom de Logitech, embalaje ecológico', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('18', '7', 'Teclado Logitech G915', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('14', '8', 'Motherboard ASUS Prime B450M-A II AM4 Micro-ATX', '', '');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('17', '8', 'Motherboard HP 810-460 MS-7826', '', 'v2.0');
INSERT INTO Producto (prod_marca_id,prod_cat_id,prod_name,prod_descripcion,prod_version) VALUES ('16', '8', 'Motherboard  ACER Aspire E5-571 E5-531', '', '');


/*==============================================================*/
/* Table: Computadora                                               */
/*==============================================================*/
INSERT INTO Computadora (comp_marca_id,comp_responsable,comp_name,comp_descrip,comp_num_serie,comp_modelo,comp_image_url) VALUES ('16', '10', 'Computadora Acer Aspire C27-1655-UA93 | Intel® Core™ i7-12650HX | Monitor LG FreeSync ', 'Sistema Operativo: Windows 11.
Pantalla: 27", FHD 1920x1080, 60 Hz, táctil, InfinityEdge.
Procesador: Intel Core i7-1165G7 de 11ava generación (12 MB de caché, 4 núcleos, 8 subprocesos, hasta 4,70 GHz Turbo).
Memoria RAM: 32 GB, 2 de 16 GB, DDR4, 2666 MHz.', 'G7HA7LLKRH72MP5', 'C27-1655-UA93', 'https://m.media-amazon.com/images/I/71udN1DBtlL._AC_SL1500_.jpg');
INSERT INTO Computadora (comp_marca_id,comp_responsable,comp_name,comp_descrip,comp_num_serie,comp_modelo,comp_image_url) VALUES ('16', '13', 'Computadora Dell Inspiron 7700 All in One Computer, 27” FHD Touchscreen, Intel 11th Gen i7-1165G7, 8GB RAM, 1TB SSD, Webcam, Nvidia Geforce MX330 2GB Graphics, HDMI, SD-Card, USB Type-C - Windows 10 Pro', 'Sistema Operativo: Windows 11.
Pantalla: 27", FHD 1920x1080, 60 Hz, táctil, InfinityEdge.
Procesador: Intel Core i7-1165G7 de 11ava generación (12 MB de caché, 4 núcleos, 8 subprocesos, hasta 4,70 GHz Turbo).
Memoria RAM: 32 GB, 2 de 16 GB, DDR4, 2666 MHz.', 'BFT7WXG6BDYJ9H9', 'TD6AL7MLH5778LV', 'https://m.media-amazon.com/images/I/71NU2aIHZ-L._AC_SL1490_.jpg');
INSERT INTO Computadora (comp_marca_id,comp_responsable,comp_name,comp_descrip,comp_num_serie,comp_modelo,comp_image_url) VALUES ('15', '12', 'Computadora AMD Ryzen 7 16-Thread Gamer PC (AMD Ryzen7 4700S 16-Threads, 4.0GHz, 16GB GDDR6, Radeon RX 550 2 GDDR5, 512 GB SSD)', 'Sistema Operativo: Windows 11.
Pantalla: 27", FHD 1920x1080, 60 Hz, táctil, InfinityEdge.
Procesador: Intel Core i7-1165G7 de 11ava generación (12 MB de caché, 4 núcleos, 8 subprocesos, hasta 4,70 GHz Turbo).
Memoria RAM: 32 GB, 2 de 16 GB, DDR4, 2666 MHz.', '63NH4BTC5FAGNB5', 'LC7WA7RLRP6PCQM', 'https://m.media-amazon.com/images/I/41NxQG33Z4S._AC_.jpg');

/*==============================================================*/
/* Table: ComputadoraProducto                                               */
/*==============================================================*/
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '1');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '5');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '12');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '15');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '21');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('1', '26');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '4');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '6');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '9');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '13');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '16');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '21');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('2', '25');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '3');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '7');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '12');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '18');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '20');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '23');
INSERT INTO ComputadoraProducto (comp_prod_computador,comp_prod_Producto) VALUES ('3', '24');


/*==============================================================*/
/* Table: Mantenimiento                                         */
/*==============================================================*/
INSERT INTO Mantenimiento (mant_user_id,mant_comp_id,mant_date,mant_descrip,mant_estado) VALUES (null, '1', '2022-06-18 20:02:50', 'Cambio de pasta', 'Pendiente');
INSERT INTO Mantenimiento (mant_user_id,mant_comp_id,mant_date,mant_descrip,mant_estado) VALUES ('1', '1', '2022-07-14 23:20:41', 'Cambio de disco', 'Realizado');
INSERT INTO Mantenimiento (mant_user_id,mant_comp_id,mant_date,mant_descrip,mant_estado) VALUES ('7', '2', '2022-07-17 12:53:30', 'Mantenimiento, cambio de pasta y cambio de disco', 'Realizado');
INSERT INTO Mantenimiento (mant_user_id,mant_comp_id,mant_date,mant_descrip,mant_estado) VALUES (null, '3', '2022-07-05 09:43:49', 'Mantenimiento Preventivo', 'Pendiente');

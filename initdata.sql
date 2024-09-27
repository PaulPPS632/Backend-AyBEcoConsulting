use AyBEcoConsulting;
insert into TipoEntidad (id, descripcion, cantdigitos) values(1, "DNI", 8);
insert into TipoEntidad (id, descripcion, cantdigitos) values(6, "RUC", 11);
insert into TipoEntidad (id, descripcion, cantdigitos) values(7, "PASAPORTE", 12);
insert into TipoEntidad (id, descripcion, cantdigitos) values(4, "CARNET EXTRANJERIA", 12);

insert into Rol (id, descripcion, nombre) values (1,'Acceso total a funciones del tenant','administrador');
insert into Rol (id, descripcion, nombre) values (2,'Acceso total a funciones del facturacion','vendedor');
insert into Rol (id, descripcion, nombre) values (3,'Acceso','almacenero');
insert into Rol (id, descripcion, nombre) values (4,'Acceso','cliente');
insert into Privilegio (id, descripcion, nombre) values (1,'Acceso total a funciones de facturacion','facturas');
insert into Privilegio (id, descripcion, nombre) values (2,'Acceso total a funciones de boletas','boletas');
insert into Privilegio (id, descripcion, nombre) values (3,'Acceso total a funciones de administracion de usuarios','usuarios');
insert into Privilegio (id, descripcion, nombre) values (4,'Acceso reportes','reportes');
insert into Privilegio (id, descripcion, nombre) values (5,'Acceso almacenes','almacenes');
insert into Privilegio (id, descripcion, nombre) values (6,'Acceso ecomerce','eccomerce');

insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,3, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,4, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,5, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(4,6, now(),now());
use aybcongr_capacitaciones;
insert into TipoEntidad (id, descripcion, cantdigitos) values(1, "DNI", 8);
insert into TipoEntidad (id, descripcion, cantdigitos) values(6, "RUC", 11);
insert into TipoEntidad (id, descripcion, cantdigitos) values(7, "PASAPORTE", 12);
insert into TipoEntidad (id, descripcion, cantdigitos) values(4, "CARNET EXTRANJERIA", 12);
insert into Rol (id, descripcion, nombre) values (1,'Acceso total','administrador');
insert into Rol (id, descripcion, nombre) values (2,'Acceso total de creacion de cursos','profesor');
insert into Rol (id, descripcion, nombre) values (3,'Acceso','encargado');
insert into Rol (id, descripcion, nombre) values (4,'Acceso','alumno');
insert into Privilegio (id, descripcion, nombre) values (1,'Acceso total a Cursos','Cursos');
insert into Privilegio (id, descripcion, nombre) values (2,'Acceso total a Cerficados','boletas');
insert into Privilegio (id, descripcion, nombre) values (3,'Acceso total a consumir cursos','usuarios');
insert into Privilegio (id, descripcion, nombre) values (4,'Acceso reportes','reportes');
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,3, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(1,4, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,1, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(2,2, now(),now());
insert into RolPrivilegio (RolId, PrivilegioId, createdAt, updatedAt) values(4,3, now(),now());
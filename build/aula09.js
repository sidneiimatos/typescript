"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SEGUNDA"] = 1] = "SEGUNDA";
    DaysOfWeek[DaysOfWeek["TERCA"] = 2] = "TERCA";
    DaysOfWeek[DaysOfWeek["QUARTA"] = 3] = "QUARTA";
    DaysOfWeek[DaysOfWeek["QUINTA"] = 4] = "QUINTA";
    DaysOfWeek[DaysOfWeek["SEXTA"] = 5] = "SEXTA";
    DaysOfWeek[DaysOfWeek["SABADO"] = 6] = "SABADO";
    DaysOfWeek[DaysOfWeek["DOMINGO"] = 0] = "DOMINGO";
})(DaysOfWeek || (DaysOfWeek = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["BRANCO"] = "#fff";
    cores["PRETO"] = "#000";
    cores["VERMELHO"] = "#f00";
    cores["VERDE"] = "#0f0";
    cores["AZUL"] = "#00f";
})(cores || (cores = {}));
console.log(cores.BRANCO);
console.log(cores.VERMELHO);
var typeUser;
(function (typeUser) {
    typeUser[typeUser["USER"] = 0] = "USER";
    typeUser[typeUser["ADMIN"] = 1] = "ADMIN";
    typeUser[typeUser["SUPER"] = 2] = "SUPER";
})(typeUser || (typeUser = {}));
console.log(typeUser.ADMIN);
const tpUser = typeUser.ADMIN;
console.log(tpUser);

enum DaysOfWeek {
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6,
    DOMINGO = 0
}

// console.log(DaysOfWeek.DOMINGO)
// console.log(DaysOfWeek['DOMINGO'])
// console.log(DaysOfWeek[1])

const d = new Date();
// console.log(d.getDate());
// console.log(`Hoje é ${DaysOfWeek[d.getDay()]}`);

enum cores {
    BRANCO = "#fff",
    PRETO = "#000",
    VERMELHO = "#f00",
    VERDE = "#0f0",
    AZUL = "#00f"
}

console.log(cores.BRANCO);
console.log(cores.VERMELHO);

enum typeUser {
    USER,
    ADMIN,
    SUPER
}
console.log(typeUser.ADMIN)

const tpUser:typeUser = typeUser.ADMIN
console.log(tpUser)
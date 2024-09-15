let dados = {
    nome: "Douglistildes",
    idade: 25,
    status: "A",
    ola:()=>{console.log("Oii!")},
    info:(p:string)=>{console.log(p)}
}

console.log(typeof(dados));
console.log(dados);
dados.ola();
dados.info('b')
// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

// Exemplo com entrada 7:

const numero = prompt("Insira um número")

for (let i = 0; i<=10; i++){
    console.log(`${numero} x ${i} = ${i * numero}`)
}
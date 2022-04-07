//1 declaração de variável
var nomeCompleto = "Murillo Antonini Coque"

console.log(nomeCompleto)


//2 declaração de variável e operadores
var numeroA = 15
var numeroB = 3

resultado = numeroA * numeroB

console.log(resultado)

// 3 funções
function saudação() {
    return "Oi eu sou o Goku!";
}

console.log(saudação())

// 4 funções e operadores
function multiplica(n1, n2) {
    return n1 * n2;
}

console.log(multiplica(2, 30))

// 5 funções e condicional
function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

console.log(podeDirigir(15))

// 6 sequência númerica (est repetição)
for (let i = 0; i <= 20; i++) {
    console.log(i)
}

//7 sequência ímpar (est repetição)
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//8 variáveis, funções, condicionais e operadores lógicos
function tabuada(num2) {
    let num1 = 0;

    while (num1 <= 10) {
        console.log(num2 + " x " + num1 + " = " + (num2 * num1));
        num1++;
    }
}

console.log(tabuada(2))

//9 variáveis, funções, condicionais
function horas(min) {
    let hora = min/60
        if (min <= 60) {
            console.log(min + " minutos equivalem a " + hora + " hora.")
        } else {
            console.log(min + " minutos equivalem a " + hora + " horas.")
        }
}

console.log(horas(120))
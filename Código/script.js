var idade = parseInt(prompt("Insira sua idade: "));

function Verificador(x) { //Parametro "x" é substituido pela váriavel "idade".
    if (x > 18) {
        return true;
    } else if (x > 0 && x < 18) {
        return false;
    } else {
        idade = parseInt(prompt("Insira um valor válido: ")) //Retorna e atualiza a váriavel idade.
        Verificador(idade)
    }
}

if (Verificador(idade) == true) {
    console.log ("Você é maior de idade");
} else {
    console.log ("Você é menor de idade");
}
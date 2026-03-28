function salario() {
    let salario = prompt("Informe seu salário.");
    let nome = prompt ("Informe seu nome.");

    console.log ("Oi, senhor/senhora "+ nome + " Seu salário com o desconto é: "+ (salario - salario*0.08));
}
function pagamento() {
    let salario = prompt("Informe seu salário.");
    let nome = prompt ("Informe seu nome.");

    if (salario<=1000){

        console.log ("Oi, senhor/senhora "+ nome + " Seu salário com o desconto é: "+ (salario - salario*0.08));

    }else if (salario > 1000.01 & salario <= 1500){
        console.log ("Oi, senhor/senhora "+ nome + " Seu salário com o desconto é: "+ (salario - salario*0.085));
    }else if (salario > 1500){
        console.log ("Oi, senhor/senhora "+ nome + " Seu salário com o desconto é: "+ (salario - salario*0.09));
    }
}
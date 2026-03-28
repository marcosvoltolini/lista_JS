function ordenacao () {
    let n1 = prompt("Digite o primeiro numero: ");
    let n2 = prompt("Digite o segundo numero: ");

    if (n1 > n2) {
        console.log ("Ordenados maior para menor: " + n1, n2);

    }else{
        console.log ("Ordenados maior para menor: " + n2, n1);
    }
}
function potencia(numero, expoente){
    if (numero === 0){
        return "Não definido";
    }
    if (expoente === 0){
        return 1;
    }

    let resultado = numero;

    if (expoente < 0){
        for(let i = 1; i < (-expoente); i++){
            resultado *= numero;
        }
     return 1/resultado;
    }
    
    for(let i = 1; i < expoente; i ++){
        resultado *= numero;
    }
    return resultado;
}

alert(potencia(5, -3));
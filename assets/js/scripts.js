function comparacao(num1, num2){
    const frase1 = criaFrase1(num1, num2);
    const frase2 = criaFrase2(num1, num2); 
}

function criaFrase1(num1, num2){
    let iguais = '';

    if(num1 !== num2){
        iguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`
}

function criaFrase2(num1, num2) {
	const soma = num1 + num2;
	let compara10 = 'menor';
	let compara20 = 'menor';

	if (soma > 10) {
		compara10 = 'maior';
	}

	if (soma > 20) {
		compara20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${compara10} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparacao(15, 3));
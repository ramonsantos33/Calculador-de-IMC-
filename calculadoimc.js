function calcularIMC() {

    const inputPeso = document.getElementById('peso').value.replace(',', '.');
    const inputAltura = document.getElementById('altura').value.replace(',', '.');

   
    const peso = parseFloat(inputPeso);
    const altura = parseFloat(inputAltura);

    const textoValor = document.getElementById('valor-imc');
    const textoClassificacao = document.getElementById('classificacao-imc');

   
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        textoValor.textContent = "Por favor, insira valores válidos.";
        textoClassificacao.textContent = "";
        return;
    }
    if (altura > 3) {
        altura = altura / 100;
    }
    const imc = peso / (altura * altura);


    textoValor.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3 (Mórbida)";
    }


    textoClassificacao.textContent = `Classificação: ${classificacao}`;
}
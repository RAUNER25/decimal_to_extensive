var decimais = {

 1: 'um',
 2: 'dois',
 3: 'três',
 4: 'quatro',
 5: 'cinco',
 6: 'seis',
 7: 'sete',
 8: 'oito',
 9: 'nove',
 10: 'dez',
 11: 'onze',
 12: 'doze',
 13: 'treze',
 14: 'quatorze',
 15: 'quinze',
 16: 'dezesseis',
 17: 'dezessete',
 18: 'dezoito',
 19: 'dezenove',
 20: 'vinte',
 30: 'trinta',
 40: 'quarenta',
 50: 'cinquenta',
 60: 'sessenta',
 70: 'setenta',
 80: 'oitenta',
 90: 'noventa',
 100: 'cento',
 200: 'duzentos',
 300: 'trezentos',
 400: 'quatrocentos',
 500: 'quinhentos',
 600: 'seiscentos',
 700: 'setesentos',
 800: 'oitocentos',
 900: 'novecentos',

}

function calcular(qtNumeros) {
    let arr = String(qtNumeros).split('');
    let output = [];
    arr.reverse().forEach((value, index) => {
        let position = String(value).padEnd(index + 1, '0');
        if (parseInt(position) > 0) {
            output.push(decimais[position]);
        }
    });
    output = output.reverse();


    if (qtNumeros >=0 && qtNumeros <= 999) {
        return "O número que você digitou por exetenso é:\n" + output.join(' ');
    }

    return 'invalido';
}

function processar(evt) {
    evt.preventDefault();
    let el = document.getElementById('qtNumeros');
    let qtNumeros = el.value;
    if (qtNumeros && !isNaN(qtNumeros)) {
        let valorPorExtenso = calcular(qtNumeros);
        alert(valorPorExtenso);

    } else {
        alert("Erro - você deve informar um número");
    }
}


function load() {
    let btn = document.getElementById('btnEnviar');
    btn.addEventListener("click", processar, false);
}


/! comentario pra ver se o git vai marcar !/
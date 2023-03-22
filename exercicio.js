// imc = peso / (altura*altura)

function calcular(){
    
    var altura = document.querySelector('input#txtalt');

    var peso = document.querySelector('input#txtpeso');

    var resultado = document.querySelector('div#resultado');

    

    if ( altura.value.length == 0 || altura.value <= 0 || altura.value >= 3.00 || peso.value.length == 0 || peso.value <= 0 || peso.value >= 300){

        alert('[ERRO] Verifique os dados novamente! obrigada!');

    } else {

        var imc = Number(peso.value)/(Number(altura.value)*Number(altura.value)).toFixed(2);

        imc = imc.toFixed(2);
        
        

        if (imc < 18.5){
            
            resultado.innerHTML = `Você está baixo do peso, seu IMC é ${imc}`;

        } else if(imc < 24.9){

            resultado.innerHTML = `Você está com peso ideal, seu IMC é ${imc}`;

        } else if (imc < 29.9){

            resultado.innerHTML = `Você está levemente acima do peso, seu IMC é ${imc}`;

        }else if(imc < 34.9){

            resultado.innerHTML = `Você está na obesidade grau 1, seu IMC é ${imc}`;
            

        }  else if (imc < 39.9){

            resultado.innerHTML = `Você está com obesidade grau 2 coniderada severa, seu IMC é ${imc}`;

        }else{

            resultado.innerHTML = `Você está com obesidade grau 3 coniderada mórbida, seu IMC é ${imc}`;
        }


    }

    
   





}
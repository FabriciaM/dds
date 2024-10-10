function IMC(){
var nome = document.getElementById("nomeid");
var sexo = document.getElementById("sexoid");
var peso = document.getElementById("pesoid");
var altura = document.getElementById("alturaid");
let homem = window.document.getElementById('homemid');
let mulher = document.getElementById('mulherid');
let resul = window.document.getElementById('resid');

var imc = peso.value / (altura.value * altura.value);
let pesoideal=0;
let pesoperder=0;

if(sexo.value == "M"){
  pesoideal = 26.4 * (altura.value * altura.value);
  
  if(imc < 20.7){
    homem.innerHTML = (` ${nome.value} está abaixo do peso`);
  }
  
  else if(imc >= 20.7 && imc <=26.4){
    homem.innerHTML = (` ${nome.value} está no peso normal`);
  }
  
  else if(imc > 26.4 && imc <=27.8){
    pesoperder = peso.value - pesoideal;
    homem.innerHTML = (` ${nome.value} está marginalmente acima do peso ideal. Precisa perder ${pesoperder}kg para chegar ao peso ideal`);
  }
  
  else if(imc > 27.8 && imc <= 31.1){
    pesoperder = peso.value - pesoideal;
    homem.innerHTML = (` ${nome.value} está acima do peso ideal. Precisa perder ${pesoperder}kg para alcançar o peso ideal`);
}
  else if(imc >= 31.1){
    pesoperder = peso.value - pesoideal;
    homem.innerHTML = (` ${nome.value} está obesa. Precisa perder ${pesoperder}kg para alcançar o peso ideal`);
  }
}

        if(sexo.value == "F"){
      pesoideal = 25.8 * (altura.value * altura.value);
      
      if(imc < 19.1){
        mulher.innerHTML = (` ${nome.value} está abaixo do peso`);
      }
      
      else if(imc >= 19.1 && imc <=25.8){
        mulher.innerHTML = (` ${nome.value} está no peso normal`);
      }
      
      else if(imc > 25.8 && imc <=27.3){
        pesoperder = peso.value - pesoideal;
        mulher.innerHTML = (` ${nome.value} está marginalmente acima do peso ideal. Precisa perder ${pesoperder}kg para chegar ao peso ideal`);
      }
      
      else if(imc > 27.3 && imc <= 32.3){
        pesoperder = peso.value - pesoideal;
        mulher.innerHTML = (` ${nome.value} está acima do peso ideal. Precisa perder ${pesoperder}kg para alcançar o peso ideal`);
    }
      else if(imc >= 32.3){
        pesoperder = peso.value - pesoideal;
        mulher.innerHTML = (` ${nome.value} está obesa. Precisa perder ${pesoperder}kg para alcançar o peso ideal`);
      }
  
}
  resul.innerHTML = (` Nome: ${nome.value} | Sexo: ${sexo.value} | Peso: ${peso.value}kg | altura: ${altura.value}m | IMC: ${imc}`);
}

function clear(){
  document.getElementById("limpar").reset();
}

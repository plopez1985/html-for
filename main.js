const form= document.querySelector('#form');
const inputs= document.querySelectorAll('#form input');
const select= document.querySelector('#form select');
const textArea= document.querySelector('#form textarea')

const expresiones = {
    card: /^[0-9]{16}$/,
    cvc: /^[0-9]{3}$/,
    amount:/^[0-9]{1,10}$/,
    codigoPostal: /^[0-9]{4,7}$/,
    texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras sin espacios, pueden llevar acentos.
}

const campos={
    $card: false,
    $cvc:false,
    $amount:false,
    $firstName:false,
    $lastName:false,
    $city:false,
    $state:false,
    $postalCode:false,
    $pay:false,
    $message:false,
}

setTimeout(() => {
    document.querySelector('.alert').style.display='none';
}, 3000);

const error= document.querySelectorAll('.error');
error[8].innerHTML="Debe seleccionar un metodo de pago";
error[8].style.display='block';

const validarFormulario= (e)=>{
    switch(e.target.name){
        case "card":
            if(e.target.value==''){
              error[0].innerHTML="Debe completar el campo Card";
              inputs[0].classList.add('input-incorrecto');
              campos.$card=false;
            }else {
                error[0].innerHTML="";
                if(expresiones.card.test(e.target.value)){
                    if(inputs[0].classList.contains('input-incorrecto')){
                        inputs[0].classList.remove('input-incorrecto')
                    }
                    inputs[0].classList.add('input-correcto');
                    campos.$card=true;
                }else{
                    if(inputs[0].classList.contains('input-correcto')){
                        inputs[0].classList.remove('input-correcto')
                    }
                    inputs[0].classList.add('input-incorrecto');
                    error[0].innerHTML="Debe introducir un numero de Card Valido (16 números)"
                    campos.$card=false;
                }
            }
        break;
        case "cvc":
            if(e.target.value==''){
                error[1].innerHTML="Debe completar el campo cvc";
                inputs[1].classList.add('input-incorrecto');
                campos.$cvc=false;
              }else {
                  error[1].innerHTML="";
                  if(expresiones.cvc.test(e.target.value)){
                      if(inputs[1].classList.contains('input-incorrecto')){
                          inputs[1].classList.remove('input-incorrecto')
                      }
                      inputs[1].classList.add('input-correcto');
                      campos.$cvc=true;
                  }else{
                      if(inputs[1].classList.contains('input-correcto')){
                          inputs[1].classList.remove('input-correcto')
                      }
                      inputs[1].classList.add('input-incorrecto');
                      error[1].innerHTML="El campo CVC debe contener 3 numeros";
                      campos.$cvc=false;
                  }
              }

        break;
        case "amount":
            if(e.target.value==''){
                error[2].innerHTML="Debe completar el campo Amount";
                inputs[2].classList.add('input-incorrecto');
                campos.$amount=false;
              }else {
                  error[2].innerHTML="";
                  if(expresiones.amount.test(e.target.value)){
                      if(inputs[2].classList.contains('input-incorrecto')){
                          inputs[2].classList.remove('input-incorrecto')
                      }
                      inputs[2].classList.add('input-correcto');
                      campos.$amount=true;
                  }else{
                      if(inputs[2].classList.contains('input-correcto')){
                          inputs[2].classList.remove('input-correcto')
                      }
                      inputs[2].classList.add('input-incorrecto');
                      error[2].innerHTML="Debe ser un monto valido (Solo números)";
                      campos.$amount=false;
                  }
              }
 
        break;
        case "firstName":
            if(e.target.value==''){
                error[3].innerHTML="Debe completar el campo Nombre";
                inputs[3].classList.add('input-incorrecto');
                campos.$firstName=false;
              }else {
                  error[3].innerHTML="";
                  if(expresiones.texto.test(e.target.value)){
                      if(inputs[3].classList.contains('input-incorrecto')){
                          inputs[3].classList.remove('input-incorrecto')
                      }
                      inputs[3].classList.add('input-correcto');
                      campos.$firstName=true;
                  }else{
                      if(inputs[3].classList.contains('input-correcto')){
                          inputs[3].classList.remove('input-correcto')
                      }
                      inputs[3].classList.add('input-incorrecto');
                      error[3].innerHTML="Colocar un formato valido Solo acepta Letras";
                      campos.$firstName=false;
                  }
              }

        break;
        case "lastName":
            if(e.target.value==''){
                error[4].innerHTML="Debe completar el campo Apellido";
                inputs[4].classList.add('input-incorrecto');
                campos.$lastName=false;
              }else {
                  error[4].innerHTML="";
                  if(expresiones.texto.test(e.target.value)){
                      if(inputs[4].classList.contains('input-incorrecto')){
                          inputs[4].classList.remove('input-incorrecto')
                      }
                      inputs[4].classList.add('input-correcto');
                      campos.$lastName=true;
                  }else{
                      if(inputs[4].classList.contains('input-correcto')){
                          inputs[4].classList.remove('input-correcto')
                      }
                      inputs[4].classList.add('input-incorrecto');
                      error[4].innerHTML="El campo Apellido solo acepta letras sin espacio";
                      campos.$lastName=false;
                  }
              }

        break;
        case "city":
            if(e.target.value==''){
                error[5].innerHTML="Debe completar el campo Ciudad";
                inputs[5].classList.add('input-incorrecto');
                campos.$city=false;
              }else {
                  error[5].innerHTML="";
                  if(expresiones.texto.test(e.target.value)){
                      if(inputs[5].classList.contains('input-incorrecto')){
                          inputs[5].classList.remove('input-incorrecto')
                      }
                      inputs[5].classList.add('input-correcto');
                      campos.$city=true;
                  }else{
                      if(inputs[5].classList.contains('input-correcto')){
                          inputs[5].classList.remove('input-correcto')
                      }
                      inputs[5].classList.add('input-incorrecto');
                      error[5].innerHTML="El campo ciudad debe contener solo letras";
                      campos.$city=false;
                  }
              }

        break;
        case "postal":
            if(e.target.value==''){
                error[7].innerHTML="Debe completar el campo Postal";
                inputs[6].classList.add('input-incorrecto');
                campos.$postalCode=false;
              }else {
                  error[7].innerHTML="";
                  if(expresiones.codigoPostal.test(e.target.value)){
                      if(inputs[6].classList.contains('input-incorrecto')){
                          inputs[6].classList.remove('input-incorrecto')
                      }
                      inputs[6].classList.add('input-correcto');
                      campos.$postalCode=true;
                  }else{
                      if(inputs[6].classList.contains('input-correcto')){
                          inputs[6].classList.remove('input-correcto')
                      }
                      inputs[6].classList.add('input-incorrecto');
                      error[7].innerHTML="El campo Postal debe ser solo Numeros con logitud de 4 a 7 Dígitos";
                      campos.$postalCode=false;
                  }
              }
        break;
        case "pay":
            
              if(inputs[7].checked==true || inputs[8].checked==true || inputs[9].checked==true || inputs[10].checked==true){
                error[8].innerHTML="";
                campos.$pay=true;
              }
        break;
    }

    if(select.value=='Pick a state'){
        error[6].innerHTML="Debe seleccionar un estado";
        select.classList.add('input-incorrecto');
        campos.$state=false;
     }else {
        error[6].innerHTML="";
        if(select.classList.contains('input-incorrecto')){
             select.classList.remove('input-incorrecto')
        }
        select.classList.add('input-correcto');
        campos.$state=true;
    }

    if(textArea.value==''){
        error[9].innerHTML="Debe completar el campo Mensaje";
        textArea.classList.add('input-incorrecto');
        campos.$message=false;
      }else {
          error[9].innerHTML="";
          if(expresiones.texto.test(textArea.value)){
              if(textArea.classList.contains('input-incorrecto')){
                  textArea.classList.remove('input-incorrecto')
              }
              textArea.classList.add('input-correcto');
              campos.$message=true;
          }else{
              if(textArea.classList.contains('input-correcto')){
                  textArea.classList.remove('input-correcto')
              }
              textArea.classList.add('input-incorrecto');
              error[9].innerHTML="Colocar un formato valido Solo acepta Letras";
              campos.$firstName=false;
          }
      }


} 

textArea.addEventListener('change',validarFormulario);
textArea.addEventListener('keyup',validarFormulario);
select.addEventListener('change',validarFormulario);

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)
    input.addEventListener('change',validarFormulario)
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  if(campos.$card==true && campos.$pay==true && campos.$cvc==true && campos.$amount==true && campos.$firstName==true && campos.$lastName==true && campos.$city==true && campos.$state==true && campos.$postalCode==true && campos.$message==true){
   e.target.submit();
  }
})
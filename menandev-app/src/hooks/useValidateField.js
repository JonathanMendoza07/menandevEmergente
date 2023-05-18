const UseValidateField = (typeField, changeError, value, required = true, maxLength = 0, ) => {

  let status = false;

  switch(typeField){

    case "email":
      if (!value && required) {
        status = true;
        return changeError({status, value:"El correo es requerido"});
        
      } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        status = true;
        return changeError({status, value:"Por favor ingresa un correo válido"});
        
      }
      return changeError({status: false, value: ""});
      

    case "password":
      if (!value && required) {
        status = true;
        return changeError({status, value:"La contraseña es requerida por favor ingresela"});
        
      } else if (!/^(?=.*[A-Za-z])[A-Za-z\d#?!@$%^&*-]{4,16}/.test(value)) {
        status = true;
        return changeError({status, value: "La contraseña debe contener de 4 a 16 caracteres y al menos una letra"});
        
      }
      return changeError({status: false, value: ""});
      

    case "text":
      if (!value && required) {
        status = true;
        return changeError({status, value:"Este campo es requerido"});
        
      }
      return changeError({status: false, value: ""});
      

    case "number":
      if (!value && required) {
        status = true;
        return changeError({status, value:"Este campo es requerido"});
        
      }else if(value.length > maxLength){
        status = true;
        return changeError({status, value: `Este campo debe ser menor o igual a ${maxLength} digitos`});
        
      } else if (!`/[0-9]/`.test(value)) {
        status = true;
        return changeError({status, value: "No se aceptan letras ni caracteres"});
        
      }
      return changeError({status: false, value: ""});
      

  }

}

export default UseValidateField;
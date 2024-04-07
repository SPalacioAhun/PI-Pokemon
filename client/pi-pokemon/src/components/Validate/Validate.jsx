const validate = (input) => {
    let errors = {};
    let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
  
    if (!input.name) {
      errors.name = "Se requiere un nombre";
    }
    if (input.name.length > 10) {
      errors.name = "Debe ser menor a 10 carácteres";
    }
  
    if (!regexImage.test(input.image)) errors.image = "Ingresa una url valida";
    if (!input.image) errors.image = "La imagen no puede estar vacia";
  
    if (!input.hp) {
      errors.hp = "No puede estar vacio";
    }
    
  
    if (input.attack === "") {
      errors.attack = "No puede estar vacio";
    }
  
    if (input.defense === "") {
      errors.defense = "No puede estar vacio";
    }

    if (input.speed === "") {
      errors.speed = " No puede estar vacio"
    }

    if (input.height === "") {
      errors.height = " No puede estar vacio"
    }

    if (input.weight === "") {
      errors.weight = " No puede estar vacio"
    }
  
    
  
    if (!/^([0-9])*$/.test(input.weight) && input.weight) {
      errors.weight = "Solo se permiten numeros positivos";
    }
  
    if (!/^([0-9])*$/.test(input.height) && input.height) {
      errors.height = "Solo se permiten numeros positivos";
    }
  
    if (!/^([0-9])*$/.test(input.hp)) {
      errors.hp = "Solo se permiten numeros positivos";
    }
  
     if (!/^([0-9])*$/.test(input.attack)) {
       errors.attack = "Solo se permiten numeros positivos";
     }
  
    if (!/^([0-9])*$/.test(input.defense)) {
      errors.defense = "Solo se permiten numeros positivos";
    }
  
    if (!/^([0-9])*$/.test(input.speed) && input.speed) {
      errors.speed = "Solo se permiten numeros positivos";
    }
  
    if (input.types.length <= 0) {
      errors.types = "Debes elegir al menos 2 tipos";
    }
    if (input.types.length >= 2) errors.types = "No puedes elegir mas de 2 tipos";
  
    if (!errors.types) errors.types = [];
  
    
  
    return errors;
  };
  
  export default validate;
  
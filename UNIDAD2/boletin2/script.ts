function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo título") as string;
    console.log (titulo);

    let nodoTitulo: HTMLHeadingElement= document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo;
}

function cambiar_fondo(){
    let body: HTMLBodyElement = document.body  as HTMLBodyElement;

    if(body.style.backgroundColor == "white"){
                body.style.backgroundColor = "black";
                body.style.color = "white";

    }else{
            body.style.backgroundColor = "white";
            body.style.color = "black";

    }
}

function analiza_edad(){
    let input: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad: number = Number(input.value);
    console.log(edad);



    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";



    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
     if(edad >=18){
        mayorMenor.textContent = "Eres mayor de edad";

    }else{
        mayorMenor.textContent = "Eres menor de edad";
    }


    let parOImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
     if(edad %2==0){
        parOImpar.textContent = "Tu edad es par";

    }else{
        parOImpar.textContent = "Tu edad es impar";
    }   


    let divisores: string = " ";

     for(let i = 1; 1<=edad; i++){
        if(edad%i == 0){
            divisores += i + ",";
        }
    }
      divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)

    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = divisores;
    let rangoEdad = "";
    
    switch(true){
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }
     let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;

    edadTexto.textContent = rangoEdad;

   
    lista.appendChild(mayorMenor);
    lista.appendChild(parOImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);

}


function mini_app(){
    let nombre: string = prompt("Dime tu nombre") as string;
    let p: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    p.textContent = "Hola, " + nombre + "!";

    let desplegable: HTMLSelectElement = document.createElement("select") as HTMLSelectElement;
    const colores = ["rojo", "verde", "azul", "negro"];
    colores.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.text = color[0].toUpperCase() + color.slice(1);
    desplegable.appendChild(option);
  });

  // Cambiar color 
  desplegable.addEventListener("change", () => {
    p.style.color = desplegable.value;
  });

  
  document.body.appendChild(desplegable);
}    


function mostrar_informacion(){
    let mostrarInformacion: HTMLSelectElement = document.getElementById("menuInformacion") as HTMLSelectElement;
     mostrarInformacion.addEventListener("change", () => {
    const valor = mostrarInformacion.value;
     switch(valor) {
      case "idioma":
        console.log(navigator.language);
        break;
      case "nombre":
        console.log(navigator.userAgent);
        break;
      case "cookies":
        console.log(navigator.cookieEnabled);
        break;
      case "pantalla":
        console.log(window.innerWidth + "x" + window.innerHeight);
        break;
    }
  });
}

function mini_navegador(){

    let inputUrl : HTMLInputElement = document.getElementById('urlInput') as HTMLInputElement;



}



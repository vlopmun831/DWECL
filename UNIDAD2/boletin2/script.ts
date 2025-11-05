//  Crea en html un título de Nivel 1 del tipo “Hola Mundo”.
//   Posteriormente crea un botón que al pulsarlo pida al usuario vía prompt un nuevo título y
//    que al confirmar este título cambie por aquello que acabamos de introducir. 

window.onload = function() {
  mostrar_informacion();
};



function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo título") as string;
    console.log (titulo);

    let nodoTitulo: HTMLHeadingElement= document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo;
}


// Crea un botón que al pulsarlo cambie el color de fondo del body a oscuro
//  y al volver a pulsarlo a claro. 

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


//  Realiza un formulario que pida la edad a una persona.
//   Al presionar el botón de envío debemos recoger dicha edad 
//   en una variable numérica y mostrar en el documento
//    el siguiente texto: (Ten en cuenta que todo debe ser mostrado
//    en una estructura de lista ordenada por letras. 
//    En negrita y color verde) a. Eres mayor/menor de edad
//    b. Tu edad es par/impar 
//    c. Los divisores de tu edad son: N1, N2, N3….ç
//    d. Según tu edad eres: Niño (0-15), Joven (15-30),
//    Adulto (30–60), Mayor (>60)

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

     for(let i = 1; i<=edad; i++){
        if(edad%i == 0){
            divisores += i + ",";
        }
    }
      // divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)

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

// 4. Crea una mini app que: a. Pregunte el nombre del usuario con un prompt().
//  b. Lo muestre en pantalla dentro de un <p id="saludo">Hola, ___!</p>.
//   c. Permita cambiar el color del saludo mediante un <select> con varios colores.
//   d. Usa as HTMLSelectElement y as HTMLParagraphElement 
//   para los elementos del DOM. 
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
}

function cambiar_color(){
    let select: HTMLSelectElement = document.getElementById("color") as HTMLSelectElement;
    let colorOption: HTMLOptionElement = select.options[select.selectedIndex] as HTMLOptionElement;
    let color = colorOption.value;

    let saludo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    saludo.style.color = color;
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

   let url: string = inputUrl.value;

    url = "https:\\" + url;
    window.location.href = url;

}




//EJERCICIOS DE RECORRER NODOS
function contarElementos(){
  let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
  console.log("La lista tiene " + lista.children.length + " personas");
}

function primerYUltimo(){
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    console.log("El primer elemento de la lista es: " + lista.firstElementChild?.textContent);

    console.log ("El último elemento de la lista es: " + lista.lastElementChild?.textContent);
}


function duplicarElemento(){
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;

    let unidades :HTMLLIElement[] = Array.from(lista.children) as HTMLLIElement[];

    let numero: number = Number(prompt("Dime el número de la lista que quieres duplicar"));


    let textoduplicado = unidades[numero - 1].textContent;
    let  nuevo:  HTMLLIElement = document.createElement("li")as HTMLLIElement;
    nuevo.textContent = textoduplicado;
      
    lista.appendChild(nuevo);
  }

  function modificarElemento(){
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;

    let unidades :HTMLLIElement[] = Array.from(lista.children) as HTMLLIElement[];

    let numero: number = Number(prompt("Dime el número de la lista que quieres modificar"));
    

    let textomodificado= unidades[numero - 1].textContent = "Juan";
    

  }

  function mostrarTodos(){
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    let unidades :HTMLLIElement[] = Array.from(lista.children) as HTMLLIElement[];
      for (let i = 0; i < unidades.length; i++){
        console.log(unidades[i].textContent);
      }
        
  }

  function añadirElemento(){
     let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
      let nuevoElemento:HTMLLIElement= document.createElement("li") as HTMLLIElement;
      nuevoElemento.textContent = prompt("Dime a quién quieres añadir:");
          lista.appendChild(nuevoElemento);

  }
  
  function eliminarElemento(){
      let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
     let unidades :HTMLLIElement[] = Array.from(lista.children) as HTMLLIElement[];
        let numero:number = Number(prompt("Dime que número quieres eliminar"));
         lista.removeChild(unidades[numero-1]);
         
  }

  function ordenarLista(){
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    let unidades :HTMLLIElement[] = Array.from(lista.children) as HTMLLIElement[];
    let nombres: string[] =[];
         for (let i = 0; i < unidades.length; i++){
           nombres.push( unidades[i].textContent);

      } 
              console.log(nombres.sort());
  }


function cuadricula_alumnos(){
  let contenedor:HTMLDivElement = document.getElementById("contenedor") as HTMLDivElement;
  let alumnos: string[] = ["Juan", "Pepe", "María", "Bruno", "Jimena", "Vanesa", "Jesús"];
   contenedor.innerHTML = "";

  for(let i=0;i<alumnos.length;i++){
    
    contenedor.appendChild(crear_ficha(alumnos[i]));
  }


}
function crear_ficha(alumno: string): HTMLDivElement{
  let ficha:HTMLDivElement = document.createElement("div");
    ficha.textContent = alumno;
    ficha.style.backgroundColor = color_aleatorio();
  return ficha;
}
function color_aleatorio():string{
const colores: string[] = [
  "#E74C3C", // rojo
  "#8E44AD", // violeta
  "#3498DB", // azul
  "#1ABC9C", // turquesa
  "#27AE60", // verde
  "#F39C12", // naranja
  "#D35400", // marrón
  "#C0392B", // rojo oscuro
  "#2ECC71", // verde claro
  "#9B59B6", // lila
  "#16A085", // verde azulado
];
  const i = Math.floor(Math.random() * colores.length);
  return colores[i];
}

function ejercicio_cookie(){
  let cookieIdioma: string = "lang-ES;";
  let cookieCurrency: string = "currency=EUR;";
  document.cookie="";
  document.cookie = cookieIdioma;
  document.cookie = cookieCurrency;

  //Leer cookies
  let arrayCookies: string [] = document.cookie.split(";");
  arrayCookies.forEach(cookie => console.log("Cookie: " + cookie));
  //Leemos una en concreto(lang)
  let valor: string = "";
  for(let i=0;i<arrayCookies.length;i++){
    let claveValor = arrayCookies[i].split("=");
    if(claveValor[0].trim() == "lang"){
      valor = claveValor[1];
    }
  }

}
function almacenar_cookie(){
  let cookieUsuario: HTML
}
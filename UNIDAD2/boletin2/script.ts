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
    let parOImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    let divisores: string = " ";
    listaDivisores.textContent = divisores;

    for(let i = 1; 1<=edad; i++){
        if(edad%i){
            divisores += i + ",";
        }
    }
    if(edad >=18){
        mayorMenor.textContent = "Eres mayor de edad";

    }else{
        mayorMenor.textContent = "Eres menor de edad";
    }
    if(edad %2==0){
        parOImpar.textContent = "Tu edad es par";

    }else{
        parOImpar.textContent = "Tu edad es impar";
    }   
    lista.appendChild(mayorMenor);
    lista.appendChild(parOImpar);
    document.body.appendChild(lista);
    lista.appendChild(listaDivisores);

}


function mini_app(){
    let nombre: string = prompt("Dime tu nombre") as string;
    let p: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    p.textContent = "Hola, " + nombre + "!";

    let desplegable: HTMLSelectElement = document.createElement("select") as HTMLSelectElement;

    p.
}
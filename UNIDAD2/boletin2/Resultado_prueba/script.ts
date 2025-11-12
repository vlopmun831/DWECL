//  window.onload = function() {
//     cargar_datos_cookie();
//   };
 
 function ejecutar_accion():void{
    let select: HTMLSelectElement = document.getElementById('opciones') as HTMLSelectElement;
    let opcion: string = select.value;
    switch(opcion){
        case ("1"):
            nombre_reves();
            break;
        case ("2"):
            redirigir();

            break;

        case ("3"):
            calcula_edad();
            break;

        case ("4"):
            almacena_coockies();
            break;
    
    default:
        console.log("Opción no válida");
        break;

}



function nombre_reves(): string {
    let resultado = document.getElementById("resultado") as HTMLDivElement;
    let input: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = input.value;
    let input2: HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let fechaNacimiento: Date = input2.valueAsDate as Date;
    let nombreReves: string = "";       
    for(let i = nombre.length - 1; i >= 0; i--){
        nombreReves += nombre[i];
        resultado.textContent = nombreReves.toUpperCase() + input2.valueAsDate?.getFullYear();
    }
    return nombreReves


}

function mensaje_error(): void {
    let resultado :HTMLDivElement= document.getElementById("resultado") as HTMLDivElement
    resultado.textContent = " ";
    let errorparrafo = document.createElement("p");
    errorparrafo.style.color = "red";
    errorparrafo.style.fontWeight = "bold";
    errorparrafo.textContent = "Debe incluir la cabecera https:// en la URL";
    resultado.appendChild(errorparrafo);  
}


function redirigir(): void {    
    let input2:HTMLInputElement = document.getElementById("apellido") as HTMLInputElement;
    let input:HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url: string = input.value;
    let regexp = new RegExp("^https:\/\/");
    if(regexp.test(url)){
       let apellido :string = input2.value.split(" ")[0];
       let direccion:string = url + "/search?q=" + apellido;
        window.location.href = direccion;
    }else{
        mensaje_error();

    }
}


function calcula_edad(): void {
    let input:HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let fechaNacimiento: Date = input.valueAsDate as Date;
    let resultado: HTMLDivElement = document.getElementById("resultado") as HTMLDivElement;
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let edad = anioActual - fechaNacimiento.getFullYear();
    resultado.textContent = "Tienes " + edad + " años";

}


function almacena_coockies(): void {
    let input:HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let input2:HTMLInputElement = document.getElementById("apellido") as HTMLInputElement; 
    let input3:HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let input4:HTMLInputElement = document.getElementById("telefono") as HTMLInputElement;
    let input5:HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let input6:HTMLInputElement = document.getElementById("url") as HTMLInputElement;

    document.cookie = "nombre=" + input.value;
    document.cookie = "apellido=" + input.value;
    document.cookie = "edad=" + input3.value;
    document.cookie = "telefono=" + input4.value;
    document.cookie = "fechaNacimiento=" + input5.value;
    document.cookie = "url=" + input6.value;
    console.table(document.cookie);

 }
}
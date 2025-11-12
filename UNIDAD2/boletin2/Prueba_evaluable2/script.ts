
function ejecutar_menu():void{
    let select:HTMLSelectElement = document.getElementById("opcion") as HTMLSelectElement;
    let opcion = select.value;
    switch(opcion){
        case("1"):
        nombre_reves();
        break;
        case ("2"):
            redirigir();
            break;
        case ("3"):
            calcula_edad();
            break;
        case ("4"):
            almacena_cookie();
            break;
        }
    }



function nombre_reves(): string {
    let input:HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = input.value;
    let resultado:HTMLDivElement = document.getElementById("resultado") as HTMLDivElement;
    let input2:HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let fechaNacimiento: Date = (input2.valueAsDate) as Date;
    let nombreReves =" ";
    for(let i  = nombre.length - 1; i >= 0; i--){
        nombreReves += nombre[i];
    }
    resultado.textContent = nombreReves.toUpperCase() + fechaNacimiento.getFullYear();
    return nombreReves;
}


function redirigir(): void{
    let input:HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url:string = input.value;
    let expreg:RegExp = /^https:\/\//;
    let input2:HTMLInputElement = document.getElementById("apellido") as HTMLInputElement;
    let apellido:string = input2.value;
    let resultado:HTMLDivElement = document.getElementById("resultado") as HTMLDivElement;
    if(expreg.test(url)){
        window.location.href = url + "/search?q="+apellido;
    }else{
        resultado.textContent = "Debe incluir la cabecera de HTTPS";
        resultado.style.color = "red";

    }
}

function calcula_edad():Number{
    let input:HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let fechaNacimiento = (input.valueAsDate) as Date;
    let fechaActual:Date =new Date();
    let anioActual:number = fechaActual.getFullYear();
    let edad:number = anioActual - fechaNacimiento.getFullYear();
    let resultado:HTMLDivElement = document.getElementById("resultado") as HTMLDivElement;
    resultado.textContent = "Tienes " + edad + " años";
    return edad;
}

function almacena_cookie(): void{
    let input:HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let input2:HTMLInputElement = document.getElementById("apellido") as HTMLInputElement;
    let inpu3:HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let input4:HTMLInputElement = document.getElementById("telefono") as HTMLInputElement;
    let input5:HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let input6:HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    
    document.cookie = "nombre=" + input.value;
    document.cookie = "apellido=" + input2.value;
    document.cookie = "edad=" + inpu3.value;
    document.cookie = "telefono=" + input4.value;
    document.cookie = "fechaNacimiento=" + input5.value;
    document.cookie = "url=" + input6.value;   
    console.table(document.cookie);
    
}

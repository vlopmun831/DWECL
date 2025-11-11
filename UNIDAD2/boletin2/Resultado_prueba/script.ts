 function ejecutar_accion():void{
    let resultado = document.getElementById("resultado") as HTMLDivElement;
    let select: HTMLSelectElement = document.getElementById('opciones') as HTMLSelectElement;
    let opcion: string = select.value;
    switch(opcion){
        case ("1"):
            nombreAlReves();
            break;
        case ("2"):
            redirigir();

            break;

        case ("3"):
            calculaEdad();
            break;

        case ("4"):
            coockies();
            break;
    

    }
    default:
        console.log("Opción no válida");
}



function nombreAlReves(): string {
    let resultado = document.getElementById("resultado") as HTMLDivElement;
    let input: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = input.value;
    let input2: HTMLInputElement = document.getElementById("fechaNacimiento") as HTMLInputElement;
    let fechaNacimiento: string = input2.valueAsDate;
    let nombreReves: string = "";       
    for(let i = nombre.length - 1; i >= 0; i--){
        nombreReves += nombre[i];
        resultado.textContent = nombreReves.toUpperCase() + input2.valueAsDate?.getFullYear();
    }
    return nombreReves


}

function mensaje_error(): void {
    let resultado = document.getElementById("resultado")


function redirigir(): void {
    let
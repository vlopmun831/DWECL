
function $inputValue(id: string) : string{
    const input = document.getElementById(id) as HTMLInputElement; 
    let result = "";

    if(input){
        result = input.value; //Recojo el valor (aqui es donde leo)
    }

    return result;

}
const div = document.getElementById("resultado") as HTMLDivElement;


function nombreAlReves (): string{
    let input:HTMLInputElement =document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = $inputValue("nombre");
    let nombreReves: string = "";
    for (let i = nombre.length - 1; i = 0; i--) {
        nombreReves += nombre[i];
        div.textContent = nombreReves;
    }

    return nombreReves;
    
  }  

function redirigir() : void{
    const regexp = new RegExp("^https:\/\/");
    let url = $inputValue("url");
    if(regexp.test(url)){
        window.location.href = url;
        }else{
            div.textContent = "Debe incluir la cabecera https:// en la URL";

        }

}


function calculaEdad() : number {
    let input:HTMLInputElement =document.getElementById("fechaNacimiento") as HTMLInputElement;
     let fechaNacimiento = Number(input.valueAsDate);
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let edad = anioActual - fechaNacimiento;    
    return edad;
}
    


    function gestionarMenu(){
    const select: HTMLSelectElement = document.getElementById('opciones') as HTMLSelectElement;
    const opcion: string = select.value;
    switch(opcion){
        case ("1"):
            nombreAlReves();
            break;
        case ("2"):
            redirigir();

            break;

    }
}
function coockies(): void{
    let nombre: string

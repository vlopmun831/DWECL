//Ejercicio1
function ej1(): void{
    let fecha: Date = new Date();
    console.log("Hoy es: " + fecha.getDay()+ "/" +(fecha.getMonth() + 1)+ "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours()+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours()+1)+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours()-1)+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());

}

//Ejercicio2

function ej2() {

    const regExp = new RegExp("[^\s@] + @[^\s@] + \.[^\s@]+$");
   
    if(regExp.test($inputValue("email"))){
        $writeNode("ok", "El email es válido");
        $writeNode("error", "");
    }else{
        $writeNode("ok", "");
        $writeNode("error", "El email no cumple la expresión");
       
        }
}



//Ejercicio3

function ej3(){


    let ventana =  window.open("https://www.google.es", "nuevaVentana");
    ventana?.document.write("HOLA");
}

     

//Ejercicio 4

function ej4(){
    const regExp = new RegExp("^https:\/\/");
    const url = $inputValue("url");
    if (regExp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error2", "Por favor introduzca una URL válida");
        setTimeout(() => $writeNode("error2", ""), 5000);            
        
}
    
}


//Ejercicio 5



//Ejercicio 6 





//Helpers para todo el boletin
function $inputValue(id: string) : string{
    const input = document.getElementById(id) as HTMLInputElement;
    let result = "";

    if (input){
        result = input.value;
    }
    return result;
}

function $writeNode (id: string, msg: string) :void {
    const nodo = document.getElementById(id) as HTMLElement;
    if(nodo){
        nodo.textContent = msg;
    }
}


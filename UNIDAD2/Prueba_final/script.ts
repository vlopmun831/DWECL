window.onload  = () =>{
almacenar_cookie();

}



function almacenar_cookie():void{
    let h1: HTMLHeadingElement = document.createElement("h1") as HTMLHeadingElement;

    let nombre:string  = window.prompt("Dime tu nombre") as string;
    document.cookie = nombre;
    console.log(document.cookie);

    h1.textContent = "Bienvenido al dashboard de " + nombre;
    document.body.appendChild(h1);
}

function ejecutar():void{
    let input:HTMLInputElement = document.getElementById("id") as HTMLInputElement;
    let id: string = input.value as string;
    let input2:HTMLInputElement = document.getElementById("descripcion") as HTMLInputElement;
    let descripcion: string = input2.value as string;
    let tipo :HTMLSelectElement = document.getElementById("tipo") as HTMLSelectElement;
    let opcion = tipo.value;
    switch(opcion){
        case ("incidencia"):
            let div:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            div.innerHTML = "";
            div.style.padding = "40px";
            div.style.backgroundColor ="red";
            div.textContent = 'Id:' + id  + ' Descripción: ' + descripcion;
            document.body.appendChild(div);
            break;
        case ("evento"):
            let div2:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            div2.innerHTML = "";
            div2.style.padding = "40px";
            div2.style.backgroundColor ="green";
            div2.textContent = 'Id:' + id  + ' Descripción: ' + descripcion;
            document.body.appendChild(div2);
        break;
         case ("tarea"):
            let div3:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            div3.innerHTML = "";
            div3.style.padding = "40px";
            div3.style.backgroundColor ="blue";
            div3.textContent = 'Id:' + id  + ' Descripción: ' + descripcion;

            document.body.appendChild(div3);
            break;
    }

}

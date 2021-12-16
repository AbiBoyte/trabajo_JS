async function llamadaAPI(){
    //realizando una llamada a una api recibo la informacion cruda no formateada
    //await para que acabe de fetchear los datos antes de guardarlos, no que lo vaya 
    //guardado conforme los recibe
    const respuesta = await fetch("https://api.genshin.dev/");
    //formatear a json
    const data = await respuesta.json();

    //Recorrer los datos creando listado de elementos en el body
    var listado =  document.createElement("ul");
    for(const valor of data.types){
        var elemento = document.createElement("button");
        elemento.innerHTML = valor;
        listado.appendChild(elemento);
        var linea = document.createElement("br");
        listado.appendChild(linea);
        console.log(elemento);
    }

    //añadir datos al cuerpo
    var principal = document.getElementById("opciones");
    principal.appendChild(listado);
}

llamadaAPI();
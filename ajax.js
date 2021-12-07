//funcion anonimas autoEjectuables.
/*
p1- instancia objeto xmlhttp-request
p2- asignar los eventos readystatechange, que manipularemos en una callback donde ira la logica. 
p3- establecer el metodo y recuerso que deseamos consumir.
p4- enviar peticion que vamos a realizar.
*/
(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'); //objeto xmlHTTPrEQUEST

    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        console.log(xhr);
        if (xhr.readyState !== 4) return; // mientras el estado no sea 4 -> completado retornamos.

        if (xhr.status >= 200 && xhr.status < 300) { //detectamos los estados.
            console.log("exito en la peticion");
            console.log(xhr.responseText);
            let respuesta = JSON.parse(xhr.responseText)

            respuesta.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`
                $fragment.appendChild($li)
            });

            $xhr.appendChild($fragment);
        } else {
            console.log("error");
            let mensaje = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${mensaje}`;


        }
        console.log('este mensaje cargara de cualquier forma');

    })


    xhr.open("GET", "assets/users.json") //abrimos la solictud
    xhr.send() //enviamos.

})

();
//funcion anonimas autoEjectuables.
/*
p1- instancia objeto xmlhttp-request
p2- asignar los eventos readystatechange, que manipularemos en una callback donde ira la logica. 
p3- establecer el metodo y recuerso que deseamos consumir.
p4- enviar peticion que vamos a realizar.
*/

/*
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
*/
/*
(() => {
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment(); //insertar fragmento almacenado en memoria.

    fetch('https://jsonplaceholder.typicode.com/users')

    .then((respuesta) => respuesta.ok ? //validamos status de la respuesta
            respuesta.json() : Promise.reject(respuesta)) //de lo contrario rechazamos promesa.

    .then(json => { //validamos su tipo
        json.forEach(element => {
            const $li = document.createElement('li');
            $li.innerHTML = `${element.email} -- ${element.phone}`
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })

    .catch(error => { //manejamos el error.
        console.log(error);
        let mensaje = error.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${error.status}: ${mensaje}`;

    })

    .finally(() => {
        console.log('terminado');
    });

})

();
*/
(() => {
    const d = document;
    const $lista = d.getElementById('Api-fetch-async-await'),
        $fragment = d.createDocumentFragment(); //solo insercion a la carga del doc

    async function getData() { //funcion asincrona para utilizar async-await.

        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/users'), //espera que se lea la promesa
                json = await respuesta.json(); //espera hasta que lo conviertas en json.
            //  if (!respuesta.ok) throw new Error('Ocurrio un error al solicitar');
            if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText }

            json.forEach(element => { //dibujamos.
                const $li = d.createElement('li');
                $li.innerHTML = `${element.email} -- ${element.name}`
                $fragment.appendChild($li);
                console.log($fragment);

            });

            $lista.appendChild($fragment);


        } catch (error) { //tomamos los mensajes de error.
            let mensaje = error.statusText || 'ocurrio un error';
            $lista.innerHTML = `   ${mensaje} ${error.status}`

        } finally {
            console.log('final');
        }

    }

    getData();




})

()
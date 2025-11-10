'use strict'

 export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch(url)
    const contatos = await response.json()

    return contatos

}




export async function criarContatos(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'

        },
        'body': JSON.stringify(contato)

    }

    const response = fetch(url, options)

    return response.ok

}


export async function atualizarContatos(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'

        },
        'body': JSON.stringify(contato)

    }

    const response = fetch(url, options)

    console.log(response.ok)
    return response.ok

}


export async function deleteContatos(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'DELETE'
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok

}



/* const novoContato = {
    "nome": "Geovanna Atualizada",
    "celular": "11 9 7809-5555",
    "foto": "semfoto.png",
    "email": "anna@gmail.com",
    "endereco": "Av. Santana, 200",
    "cidade": "Alphaville",

}*/


const novoContato = {
    "nome": "Nyan cat",
    "celular": "11 9 9999-9999",
    "foto": "",
    "email": "nyancat@gmail.com",
    "endereco": "Nasa, 999",
    "cidade": "",

}

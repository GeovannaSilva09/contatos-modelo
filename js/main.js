'use strict'

import { lerContatos } from "./contato.js"
import { criarContatos } from "./contato.js"
import { atualizarContatos } from "./contato.js"
import { deleteContatos } from "./contato.js"





function mostrarCards(lista) {

    const container = document.getElementById('container')
    container.replaceChildren()

    lista.forEach(contato => {
        const div = document.createElement('div')
        div.classList.add('card-contato')
        // Armazenar o ID do contato no elemento do card para a função de deletar
        div.dataset.id = contato.id

        const img = document.createElement('img')

        img.src = contato.foto

        const nome = document.createElement('h2')
        nome.textContent = contato.nome

        const numero = document.createElement('p')
        numero.textContent = contato.celular

        container.append(div)
        div.append(img, nome, numero)
    })
}


const novoContato = document.getElementById('novo-contato')
novoContato.addEventListener('click', function () {
    const main = document.querySelector('main')
    main.classList.remove('card-show')
    main.classList.add('form-show')

    // Limpar formulário ao abrir
    document.querySelector('form').reset()


    nome: document.getElementById('nome').value,
    celular: document.getElementById('celular').value,
    email: document.getElementById('email').value,
    endereco: document.getElementById('endereco').value,
    cidade: document.getElementById('cidade').value
}


const sucesso = await criarContatos(novoContato) 

if (sucesso) {

    const main = document.querySelector('main')
    main.classList.remove('form-show')
    main.classList.add('card-show')

    // Recarrega a lista
    mostrarCards(await lerContatos())
} else {
    alert('Erro ao criar o contato. Tente novamente.')

})


const cancelar = document.getElementById('cancelar')
cancelar.addEventListener('click', function () {
    const main = document.querySelector('main')
    main.classList.remove('form-show')
    main.classList.add('card-show')
})


const deletar = document.getElementById('deletar')
deletar.addEventListener('click', function () {
    const main = document.querySelector('main')

})


const salvar = document.getElementById('salvar')
salvar.addEventListener('click', async function () {
    const nome = document.getElementById('nome').value
    const celular = document.getElementById('celular').value
    const email = document.getElementById('email').value
    const foto = document.getElementById('foto').files[0] ? URL.createObjectURL(document.getElementById('foto').files[0]) : '' // Pega a URL da foto ou string vazia.
})
     


mostrarCards(await lerContatos())










/*function mostrarCards(lista) {

    const container = document.getElementById('container')
    container.replaceChildren()

    lista.forEach(contato => {
      const div = document.createElement('div') 
      div.classList.add('card-contato')
      
      const img = document.createElement('img')

      img.src = contato.foto

      const nome = document.createElement('h2')

      nome.textContent = contato.nome

      const numero = document.createElement('p')

      numero.textContent = contato.celular

      container.append(div)
      div.append(img, nome, numero)
    })
    

}


const novoContato = document.getElementById('novo-contato')
novoContato.addEventListener('click', function(){
    const main = document.querySelector('main')
    main.classList.remove('card-show')
    main.classList.add('form-show')
})

const cancelar = document.getElementById('cancelar')
cancelar.addEventListener('click', function(){
    const main = document.querySelector('main')
    main.classList.remove('form-show')
    main.classList.add('card-show')
})

const deletar = document.getElementById('deletar')
deletar.addEventListener('click', function(){
    const main = document.querySelector('main')

})


mostrarCards(await lerContatos()) */





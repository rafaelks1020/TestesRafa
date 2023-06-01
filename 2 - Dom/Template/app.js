new Vue({
    el: '#desafio',
    data: {
        titulo: 'O meu html é top',
        nome: 'Rafael Cardozo Feitosa',
        idade: 26,
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    methods: {

        idademultiplicada()
        {
            return this.idade*3
        },
        numerorandomico()
        {
            return Math.random()
        }
        
    }
})
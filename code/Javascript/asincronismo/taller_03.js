function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn(nombre)
    }, 3000)
}

function hablar(nombre, fn) {
    setTimeout(function(){
        console.log('bla, bla, bla...')
    }, 1000)
}

function adios(nombre) {
    setTimeout(function(){
        console.log(`Adios ${nombre}`)
        console.log('Terminando conversacion...')
    }, 1000)
}

console.log('Iniciando conversacion...')
saludar('Guillermo', hablar)

function tratarErroELancar (erro){
    throw new Error('erro tratado')
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase()+ '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
    finally{
        console.log('final')
    }
}
//erro propositalmente em "nome :"
const obj = {nome: 'Roberto'}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)
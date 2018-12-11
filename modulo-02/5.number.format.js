
function format(number) {
    // const formatado = number.toLocaleString('pt-BR', {
    //     style: 'currency',
    //     currency: 'BRL'
    // })
    const formatado = number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    })
    return formatado
}

async function main() {
    const number = 1582.39
    const formatado = format(number)
    console.log('valor formatado', formatado)

    // const number = 10529.89

    // // usar as configurações do browser ou do SO
    // console.log(number.toLocaleString())

    // // usar ingles dos EUA
    // console.log(number.toLocaleString('en-US'))

    // // mostrar dolar
    // console.log(number.toLocaleString('en-US', { style:'currency', currency: 'USD' }))

    // // mostrar reais 
    // // "R$10.529,89"
    // console.log(number.toLocaleString('pt-BR', { style:'currency', currency: 'BRL', currencyDisplay: 'symbol' }))

    // // "BRL10.529,89"
    // console.log(number.toLocaleString('pt-BR', { style:'currency', currency: 'BRL', currencyDisplay: 'code' }))

    // // "10.529,89 Reais brasileiros"
    // console.log(number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'name' }))
}
main()
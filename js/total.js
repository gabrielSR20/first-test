let inputQuantidade = document.querySelector('#qnt')
let outputTotal = document.querySelector('#total')

inputQuantidade.oninput = function() {
    let preco = document.querySelector('#preco').textContent
    preco = preco.replace("R$ ", "")
    preco = preco.replace(",", ".")
    preco = parseFloat(preco)

    let quantidade = inputQuantidade.value
    let total = quantidade * preco
    total = "R$ " + total.toFixed(2)
    total = total.replace(".", ",")

    outputTotal.value = total
}

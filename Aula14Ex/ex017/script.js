function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Erro! Nenhum número informado!')
    }else{
        var n = Number(num.value)
        var c = 1    
        tab.innerHTML = ''
        while(c <= 10){
            var item = window.document.createElement('option') //mesma coisa de ter criado o option diretamente no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //adiciona um elemento filho, que nesse caso é o item
            c++
        }
    }
}
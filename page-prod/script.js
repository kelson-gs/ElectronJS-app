var searchProduto = document.getElementById('search-produto');
var res = document.getElementById('res');
var respSearch = document.getElementById('resp-search');
var botaoSearch = document.getElementById('btn-search');
var viewEquivalente = document.getElementById('view-equivalente');
var tituloEquivalente = document.getElementById('title-equivalente');
var list_eq = document.getElementById('list_eq');
//var p = document.getElementById('p-eq');  
var itemEq = '';

// pegando arquivo json 
var produtos = [];
var produtoSelecionado = ''
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myObj = JSON.parse(this.responseText);
        let jsonOptions = myObj.produtos;
        jsonOptions.forEach( item => {
            var option = document.createElement('option');
            option.value = item.nome;
            res.appendChild(option);
            
        });
        produtos.push(myObj.produtos);
    }
}

searchProduto.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toUpperCase();
    let listFilered = [];
    const filteredLis = produtos.filter( el => {
        el.map(item => {
            if (item.nome.includes(inputValue)){
                listFilered.push(item.nome);
                
            } else if(inputValue.length > 1 && item.nome.includes(inputValue) === true){
                listFilered = [];
                listFilered.push(item.nome)
                
            }
            viewList(item)
        }) 
    }) 
})

botaoSearch.addEventListener('click',  () => buscarEquivalet())

function viewList (list) {
    let caractere = searchProduto.value
    if(caractere == `${list.nome}`){
        //console.log('eq: ',list.eq)
        itemEq = list.eq
    }
}

function buscarEquivalet(){
    let produto = itemEq;
    
    tituloEquivalente.innerText = searchProduto.value;
    tituloEquivalente.style.display = 'block';
    list_eq.innerHTML = '';
    produto.forEach( item => {
        var p = document.createElement('p');
        p.className = "p_eq"
        p.innerText = item;
        console.log(p)
        list_eq.appendChild(p);
            
    });

    if(searchProduto.value.length === 0){
        list_eq.innerHTML = '';
    }
    
}

xmlhttp.open('GET', '../tr-di-ci.json', true);
xmlhttp.send();
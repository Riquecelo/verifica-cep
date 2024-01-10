
let cep = document.getElementById('cep')

/* const eNumero = (num) => /^[0-9]+$/.test(cep); */

function validaCep(cep){
    return cep.length == 8
}

const preencherFormulario=(endereco)=>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cid').value = endereco.localidade;
    document.getElementById('UF').value = endereco.uf;
}

cep.addEventListener('focusout', async()=>{
    let vcep = cep.value;
    if(validaCep(vcep)){
        let url = `http://viacep.com.br/ws/${vcep}/json/`;
        /* let dados = await fetch(url)
        let endereco = await dados.json()
        preencherFormulario(endereco)
        console.log(endereco) */
        await fetch(url)
            .then(resp => resp.json())
            .then(res => {
                if(res.hasOwnProperty('erro')){
                    console.log(res)
                    return
                }else{
                    preencherFormulario(res)
                    console.log('cep encontrado na api!')
                }
            })
        }else{
            alert('cep inválido')
        }
})

const phomeVerify = document.getElementById('phone-verify');

export function exibirDados(dados) {
  phomeVerify.innerHTML = `
    <li class="valid" ><span >Valido: </span>${dados.phone_valid}</li>
    <li ><span>Pais: </span>${dados.country}</li>
    <li ><span>Operadora: </span>${dados.carrier}</li>
    <li ><span>Tipo: </span>${dados.phone_type}</li>
    <li ><span>Internacional: </span>${dados.international_number}</li>
    <li ><span>Numero Local: </span>${dados.local_number}</li>
    <li ><span>Número E164: </span>${dados.e164}</li>
    <li ><span>Região: </span>${dados.phone_region}</li>
    <li ><span>Código de discagem: </span>${dados.country_prefix}</li>  
  
  `;


}

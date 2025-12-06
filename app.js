import { verifyPhone } from "./config.js";
import {exibirDados} from "./ui.js"

const formSubmit = document.querySelector('form')
const inputPhone = document.getElementById('phone')


formSubmit.addEventListener('submit', async (event)=>{
  event.preventDefault()

  const numeroDigitado = inputPhone.value


 const dados = await  verifyPhone(numeroDigitado)

 exibirDados(dados)

})
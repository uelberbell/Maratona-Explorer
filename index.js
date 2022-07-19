const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
  "Não sei, sua mula!",
  "Talvez sim, sua mula! kkkk",
  "Muito provavelmete, oh merda",
  "Não, impossível.",
  "Jamais",
  "Nem pense nessas coisas",
  "Eu posso te ajudar com isso!",
  "Talvez sim",
  "Acho que não",
  "Já estou cansando de te ajudar"
]


function fazerPergunta() {

  if(inputPergunta .value == ""){
    alert("É necessário que você digite uma pergunta para continuar!")
    return
  }
  // Transformando HTML direto do JS
  const pergunta = "<div>" + "'" + inputPergunta.value + "'" + "<div/>"

  // console.log("'" + inputPergunta.value + "'")
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  console.log(numeroAleatorio)
  console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // Apagar após 2 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
  }, 3000)
}
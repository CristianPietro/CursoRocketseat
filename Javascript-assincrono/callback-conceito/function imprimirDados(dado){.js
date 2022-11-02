function imprimirDados(dado){
  console.log(dado())
}
  
imprimirDados(function(){
  return "Olá, mundo"
})
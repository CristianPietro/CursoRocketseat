
/**
 * Herança
 */


 class Moto {
  rodas = 4;

  mover(direção){}
  virar(direção){}

}

class Moto extends Veiculo{
  constructor(){
    super() //puxar atributos e metodosdo pai
    this.rodas = 2
  }
}
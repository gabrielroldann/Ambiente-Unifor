package java;

public class Somatorio {
  public int somarNumeros(int[] numeros) {
    int soma = 0;
    for (int numero : numeros) {
      soma += numero;
    }
    return soma;
  }
}
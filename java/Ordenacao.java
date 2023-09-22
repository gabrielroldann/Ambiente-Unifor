package java;

import java.util.Arrays;

public class Ordenacao {
  public void ordenarNumeros(int[] numeros) {
    Arrays.sort(numeros);
    System.out.println("Números ordenados: " + Arrays.toString(numeros));
  }
}
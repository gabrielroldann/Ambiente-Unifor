package java;

import java.util.Scanner;

public class Contagem {
  public void contarNumeros() {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Informe o tamanho do array: ");
    int tamanho = scanner.nextInt();
    int[] numeros = new int[tamanho];
    for (int i = 0; i < tamanho; i++) {
      System.out.print("Digite o valor " + (i + 1) + ": ");
      numeros[i] = scanner.nextInt();
    }
    System.out.println("Total de valores digitados: " + tamanho);
  }
}

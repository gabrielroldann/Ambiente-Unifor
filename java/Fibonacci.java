package java;

public class Fibonacci {
  public void gerarFibonacci(int n) {
    int a = 0, b = 1;
    System.out.println("Sequência de Fibonacci até o termo " + n + ":");
    for (int i = 0; i < n; i++) {
      System.out.print(a + " ");
      int c = a + b;
      a = b;
      b = c;
    }
    System.out.println();
  }
}
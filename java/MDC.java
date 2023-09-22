package java;

public class MDC {
  public int calcularMDC(int a, int b) {
    if (b == 0) {
      return a;
    }
    return calcularMDC(b, a % b);
  }
}
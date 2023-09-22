package java;

public class NumeroPrimo {
  public boolean numPrimo(int numero) {
    if (numero <= 1) {
      return false;
    }
    for (int i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i == 0) {
        return false;
      }
    }
    return true;
  }
}
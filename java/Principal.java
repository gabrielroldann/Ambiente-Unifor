package java;

public class Principal {
    public static void main(String[] args) {

        Contagem contador = new Contagem();
        Fibonacci fib = new Fibonacci();
        MDC mdc = new MDC();
        NumeroPrimo numeroPrimo = new NumeroPrimo();
        Ordenacao ordem = new Ordenacao();
        Somatorio somatorio = new Somatorio();

        contador.contarNumeros();
        fib.gerarFibonacci(10);
        mdc.calcularMDC(12, 9);

        // 2 Exemplos para confirmar funcionamento;
        numeroPrimo.numPrimo(17);
        numeroPrimo.numPrimo(16);
        // ----------------------------------------
        
        int[] numeros = new int[10];
        
        // Preenchendo a lista;
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = i+1; // Número definido a mão..
        }
        ordem.ordenarNumeros(numeros);

        somatorio.somarNumeros(numeros); // Reutilizei o array acima.
    }
}

import java.util.Scanner;

class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        int result = factorial(n);
        System.out.println(result);
    }
    static int factorial(int n){
        int product = 1;
        for (int i=1;i<=n;i++){
            product = product*i;
        }
        return product;
    }
}

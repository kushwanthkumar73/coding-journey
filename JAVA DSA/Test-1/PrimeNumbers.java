import java.util.Scanner;

class PrimeNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        boolean result = checkPrime(n);
        printPrime(n);
    }
    static boolean checkPrime(int n) {
    for (int i=2;i<n;i++){
        if(n%i ==0){
            return false;
        }
    }
    return true;
    }
    static void printPrime(int  n) {
        for(int i =1;i<=n;i++){
            if(checkPrime(i)){
                System.out.println(i);
            }
        }
    }
}
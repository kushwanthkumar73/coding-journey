import java.util.Scanner;

class isPrime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        boolean isPrime = checkPrime(n);
        if(isPrime == true){
            System.out.println("IsPrime");
        } else {
            System.out.println("Is Not Prime");
        }
    }
    static boolean checkPrime(int n){
        for(int i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
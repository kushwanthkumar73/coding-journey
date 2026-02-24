import java.util.Scanner;

class SumOfPrime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Two Numbers:");
        int m = sc.nextInt();
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        boolean result = checkPrime(n);
        sumofPrime(m,n);
    }
    static boolean checkPrime(int n){
        if(n<=1){
            return false;
        }
        for(int i =2;i<n;i++){
            if(n%i ==0){
                return false;
            }
        }
        return true;
    }
    static void sumofPrime(int m,int n){
        int sum =0;
        for( int i=m;i<=n;i++){
            if(checkPrime(i)){
                sum = sum +i;
            }
        }
        System.out.println(sum);
    }
}

import java.util.Scanner;

class SumOfNatural {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        int result = sumOfNum(n);
        System.out.println(result);
    }
    static int sumOfNum(int n){
        int total =0;
        for(int i =1;i<=n;i++){
            total += i;
        }
        return total;
    }
}

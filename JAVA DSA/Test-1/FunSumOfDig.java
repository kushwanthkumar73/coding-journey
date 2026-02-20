import java.util.Scanner;

class FunSumOfDig {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        int result = sumOfDig(n);
        System.out.println(result);
    }
    static int sumOfDig(int n) {
    int sum=0;
    for (int i=1;n>0;n=n/10){
        int last_digit = n%10;
        sum +=last_digit;
    }
    return sum;
        
    }
}
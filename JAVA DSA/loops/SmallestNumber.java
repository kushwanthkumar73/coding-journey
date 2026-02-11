import java.util.Scanner;

class SmallestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int min = 9;
        while(n>0) {
            int digit = n%10;
            if(digit<min){
                min = digit;
            }
            n=n/10;
        }
        System.out.println(min);
    }
}